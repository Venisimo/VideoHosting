import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import __dirname from '../__dirname.js';
let app = express();

const templatesPath = path.join(__dirname, '/frontend');

nunjucks.configure(templatesPath, {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('start.html');
});

app.get('/result', function(req, res) {
    res.render('result.html');
});
app.get('/watch', function(req, res) {
    res.render('watch.html');
});
app.get('/channel', function(req, res) {
    res.render('channel.html');
});

app.use(express.static(path.join(templatesPath, 'public')));

app.listen(3000, function() {
    console.log('running');
});