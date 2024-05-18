import express from 'express';
import uploadAvatar from '../middleware/uploadAvatar.js';
import uploadVideo from '../middleware/uploadVideo.js';
import uploadPreview from '../middleware/uploadPreview.js';
import db from '../db.js';
import fs from 'fs';
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
        const {id, name, description} = req.body;
        console.log(req.body);
        const newVideo = req.file.filename;
        const currentDate = new Date();
        console.log(newVideo);
        await db.query(`INSERT INTO "Videos" (path, user_id, name, description, date) VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
        [newVideo, id, name, description, currentDate]);
        return res.json({ filename: req.file.filename });
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