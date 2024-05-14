import multer, { diskStorage } from 'multer';
import __dirname from '../../__dirname.js';
import path from 'path';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/frontend/public/videos/'));
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + Math.random().toString(36) + '.mp4');
    }
});

const types = ['video/mp4', 'video/mpeg', 'video/ogg'];

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

export default multer({storage, fileFilter})