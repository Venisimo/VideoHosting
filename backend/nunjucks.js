import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import __dirname from '../__dirname.js';
import UserController from '../backend/controller/user.controller.js';
import ProfileController from '../backend/controller/profile.controller.js';
let app = express();
const templatesPath = path.join(__dirname, '/frontend');

nunjucks.configure(templatesPath, {
    autoescape: true,
    express: app
});

app.use(express.json())
app.get('/', function(req, res) {
    res.render('start.html');
});
app.post('/register', UserController.regestration);
app.post('/login', UserController.login);
app.put('/profile', ProfileController.createProfile);
app.post('/ChekProfile', ProfileController.chekProfile);
app.post('/verifyToken', async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Токен не предоставлен' });
    }
    try {
        const decodedToken = await UserController.verifyToken(token);
        res.status(200).json({ message: 'Токен верифицирован', decodedToken });
    } catch (error) {
        return res.status(401).json({ error: 'Неверный токен' });
    }
});
app.post('/userInfo', ProfileController.getInfoUser); 
app.post('/profileLink', ProfileController.addLink); 
app.post('/getLink', ProfileController.getLink); 
app.put('/profileLinkUpdate', ProfileController.updateLink); 
app.delete('/profileLinkDelete', ProfileController.deleteLink); 
app.get('/profile-setting', function(req, res) {
    res.render('profileSetting.html');
});
app.get('/login', function(req, res) {
    res.render('login.html');
});
app.get('/registration', function(req, res) {
    res.render('registration.html');
});
app.get('/result', function(req, res) {
    res.render('result.html');
});
app.get('/watch', function(req, res) {
    res.render('watch.html');
});
app.get('/channel/videos', function(req, res) {
    res.render('channel.html');
});
app.get('/channel/subscriptions', function(req, res) {
    res.render('channelSubs.html');
});
app.get('/channel/about', function(req, res) {
    res.render('channelAbout.html');
});
app.get('/history', function(req, res) {
    res.render('ViewsHistory.html');
});

app.use(express.static(path.join(templatesPath, 'public')));

app.listen(3000, function() {
    console.log('running');
});