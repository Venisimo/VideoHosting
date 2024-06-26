import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import __dirname from '../__dirname.js';
import getRoutes from '../backend/routes/get.routes.js';
import userRoutes from '../backend/routes/user.routes.js';
import profileRoutes from '../backend/routes/profile.routes.js';
import uploadRoutes from '../backend/routes/upload.routes.js';
import subscribeRoutes from '../backend/routes/subscribe.routes.js';
import videoRoutes from '../backend/routes/video.routes.js';
import ratingRoutes from '../backend/routes/rating.routes.js';
import commentRoutes from '../backend/routes/comment.routes.js';
import answerRoutes from '../backend/routes/answer.routes.js';
import fs from 'fs';
import db from './db.js';
let app = express();
const templatesPath = path.join(__dirname, '/frontend');

nunjucks.configure(templatesPath, {
    autoescape: true,
    express: app
});

app.use(express.json())
app.use('/', getRoutes);
app.post('/getStartVideo', videoRoutes);
app.post('/register', userRoutes);
app.post('/login', userRoutes);
app.put('/profile', profileRoutes);
app.post('/ChekProfile', profileRoutes);
app.post('/verifyToken', userRoutes);
app.post('/userInfo', profileRoutes); 
app.post('/profileLink', profileRoutes); 
app.post('/getLink', profileRoutes); 
app.put('/profileLinkUpdate', profileRoutes); 
app.delete('/profileLinkDelete', profileRoutes);
app.post('/headerInfo', profileRoutes);
app.put('/uploadPhoto', uploadRoutes);
app.post('/uploadVideo', uploadRoutes);
app.put('/uploadPoster', uploadRoutes);
app.post('/getSelfVideo', videoRoutes);
app.post('/getWatchVideo', videoRoutes);
app.post('/getResultVideo', videoRoutes);
app.post('/getUsersVideo', videoRoutes);
app.post('/subcribeOnChannel', subscribeRoutes);
app.delete('/unSubcribeOnChannel', subscribeRoutes);
app.post('/getSelfSubscriptions', subscribeRoutes);
app.post('/getUserSubscriptions', subscribeRoutes);
app.post('/userInfoVideos', videoRoutes);
app.post('/addHistory', videoRoutes);
app.post('/getHistory', videoRoutes);
app.post('/deleteHistory', videoRoutes);
app.post('/ChekSubs', subscribeRoutes);
app.post('/CountSub', subscribeRoutes);
app.post('/CountSelfSub', subscribeRoutes);
app.post('/like', ratingRoutes);
app.post('/dislike', ratingRoutes);
app.post('/getLD', ratingRoutes);
app.post('/chekSelfLD', ratingRoutes);
app.post('/searchHistory', videoRoutes);
app.post('/addComment', commentRoutes);
app.post('/getComments', commentRoutes);
app.post('/getProfileForComment', commentRoutes);
app.post('/getCountComment', commentRoutes);
app.post('/deleteComment', commentRoutes);
app.post('/addAnswer', answerRoutes);
app.post('/deleteAnswer', answerRoutes);
app.use('/deleteVideo', async(req, res) => {
    const { path } = req.body;
    fs.unlink(__dirname + "/frontend/public/videos/" + path, (err) => {
        // if (err) throw err;
        console.log('Deleted video');
    });
    await db.query(`DELETE FROM "Videos" where path = $1 RETURNING *`, [path]);
    await db.query(`DELETE FROM "History watch" where path = $1 RETURNING *`, [path]);
    await db.query(`DELETE FROM "Comments" where video = $1 RETURNING *`, [path]);
    await db.query(`DELETE FROM "Likes" where name = $1 RETURNING *`, [path]);
    await db.query(`DELETE FROM "Dislikes" where name = $1 RETURNING *`, [path]);

    res.json({message: `видео удалено`});
})

app.use('/profile-setting', getRoutes) 
app.use('/login', getRoutes) 
app.use('/registration', getRoutes) 
app.use('/result', getRoutes) 

app.use('/watch', getRoutes) 

app.use('/channel/videos', getRoutes) 

app.use('/channel/subscriptions', getRoutes) 

app.use('/channel/about', getRoutes) 

app.use('/videos', getRoutes) 

app.use('/subscriptions', getRoutes) 

app.use('/about', getRoutes) 

app.use('/history', getRoutes) 

app.use('/dev', getRoutes) 
app.use('/404', getRoutes) 

app.use(express.static(path.join(templatesPath, 'public')));

app.use('/videos', express.static(path.join(__dirname, '/frontend/public/videos'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.mp4')) {
            res.setHeader('Content-Type', 'video/mp4');
        } else if (path.endsWith('.ogg')) {
            res.setHeader('Content-Type', 'video/ogg');
        } else if (path.endsWith('.mpeg')) {
            res.setHeader('Content-Type', 'video/mpeg');
        }
    }
}));

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(templatesPath,'/pageNotFound.html'));
});

app.listen(3000, function() {
    console.log('running');
});