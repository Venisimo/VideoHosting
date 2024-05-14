import db from '../db.js';

class VideoController {
    async getSelfVideo(req, res) {
        const {id} = req.body;
        const selfVideo = await db.query(`SELECT views, name, preview, path, date FROM "Videos" where user_id = '${id}'`);
        const VideosViews = selfVideo.rows.map(row => row.views);
        const VideosNames = selfVideo.rows.map(row => row.name);
        const VideosPreviews = selfVideo.rows.map(row => row.preview);
        const VideosPath = selfVideo.rows.map(row => row.path);
        const VideosDate = selfVideo.rows.map(row => row.date);
        res.json({VideosViews, VideosNames, VideosPreviews, VideosPath, VideosDate});
    }
} 

export default new VideoController();
