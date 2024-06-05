import express from 'express';
import uploadAvatar from '../middleware/uploadAvatar.js';
import uploadVideo from '../middleware/uploadVideo.js';
import uploadPreview from '../middleware/uploadPreview.js';
import db from '../db.js';
import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import __dirname from '../../__dirname.js';
const router = express.Router();

router.put('/uploadPhoto', uploadAvatar.single('avatar'), async (req, res) => {
    if (req.file) {
        const UserId = req.body.id;
        console.log(req.body);
        if ("images/users-avatar/Avatar-default.png" != req.body.currentAvatar) {
            fs.unlink(__dirname + "/frontend/public/" + req.body.currentAvatar, (err) => {
                if (err) throw err;
            
                console.log('Deleted');
            });
        }
        const newAvatar = "/images/users-avatar/" + req.file.filename;
        await db.query(`UPDATE "Users" set avatar = $1 where id = '${UserId}' RETURNING *`, [newAvatar])
        return res.json({ filename: req.file.filename });
    }
    res.status(400).json({ message: 'Файл не был загружен' });
});
router.post('/uploadVideo', uploadVideo.single('video'), async (req, res) => {
    if (req.file) {
        const { id, name, description } = req.body;
        const newVideo = req.file.filename;
        const inputFilePath = path.join(__dirname, '/frontend/public/videos/', newVideo);
        const outputFilePath = path.join(__dirname, '/frontend/public/videos/', 'c' + newVideo);

        try {
            // Перекодирование видео с помощью ffmpeg
            await new Promise((resolve, reject) => {
                ffmpeg(inputFilePath)
                    .output(outputFilePath)
                    .videoCodec('libx264')
                    .audioCodec('aac')
                    .on('end', () => {
                        console.log('Перекодирование завершено');
                        resolve();
                    })
                    .on('error', (err) => {
                        console.error('Ошибка перекодирования: ', err);
                        reject(err);
                    })
                    .run();
            });
            const getVideoDuration = (filePath) => {
                return new Promise((resolve, reject) => {
                    ffmpeg.ffprobe(filePath, (err, metadata) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(metadata.format.duration);
                        }
                    });
                });
            };
            const duration = await getVideoDuration(outputFilePath);
            console.log(`Длина видео: ${duration} секунд`);
            const integerDuration = Math.round(duration);
            console.log(`Длина видео: ${integerDuration} секунд`);
            const currentDate = new Date();

            // Вставка данных о видео в базу данных
            const result = await db.query(
                `INSERT INTO "Videos" (path, user_id, name, description, date, duration) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                ['c' + newVideo, id, name, description, currentDate, integerDuration]
            );
            fs.unlinkSync(inputFilePath);
            return res.json({ filename: 'c' + newVideo });
        } catch (err) {
            console.error('Ошибка обработки видео: ', err);
            return res.status(500).json({ message: 'Ошибка обработки видео' });
        }
    }
    res.status(400).json({ message: 'Файл не был загружен' });
});
router.put('/uploadPoster', uploadPreview.single('poster'), async (req, res) => {
    if (req.file) {
        console.log(req.body);
        const pathVideo = req.body.pathVideo
        const newPoster = "/videos/posters/" + req.file.filename;
        await db.query(`UPDATE "Videos" set preview = $1 where path = '${pathVideo}' RETURNING *`, [newPoster]);
        return res.json({ filename: req.file.filename });
    }
    res.status(400).json({ message: 'Файл не был загружен' });
});

export default router;