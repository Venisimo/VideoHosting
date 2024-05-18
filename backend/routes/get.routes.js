import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.render('start.html');
});
router.get('/profile-setting', function(req, res) {
    res.render('profileSetting.html');
});
router.get('/login', function(req, res) {
    res.render('login.html');
});
router.get('/registration', function(req, res) {
    res.render('registration.html');
});
router.get('/result', function(req, res) {
    res.render('result.html');
});
router.get('/watch', function(req, res) {
    res.render('watch.html');
});
router.get('/channel/videos', function(req, res) {
    res.render('channel.html');
});
router.get('/channel/subscriptions', function(req, res) {
    res.render('channelSubs.html');
});
router.get('/channel/about', function(req, res) {
    res.render('channelAbout.html');
});
router.get('/videos', function(req, res) {
    res.render('userChannel.html');
});
router.get('/subscriptions', function(req, res) {
    res.render('userSubs.html');
});
router.get('/about', function(req, res) {
    res.render('userAbout.html');
});
router.get('/history', function(req, res) {
    res.render('ViewsHistory.html');
});

export default router;