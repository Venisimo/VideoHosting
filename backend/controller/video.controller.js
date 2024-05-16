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
    async getWatchVideo(req, res) {
        const {path} = req.body;
        const WatchVideo = await db.query(`SELECT views, name, preview, user_id, date, description FROM "Videos" where path = '${path}'`);
        const NewView = WatchVideo.rows[0].views + 1;
        await db.query(`UPDATE "Videos" set views = $1 where path = '${path}' RETURNING *`, [NewView]);
        const UserId = WatchVideo.rows[0].user_id;
        const User = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${UserId}'`);
        const VideoInfo = WatchVideo.rows[0];
        const UserInfo = User.rows[0];
        res.json({VideoInfo, UserInfo});
    }
    async getStartVideo(req, res) {
        const Videos = await db.query(`SELECT views, path, name, preview, user_id, date FROM "Videos"`);
        let UsersInfo = [];
        for (let i = 0; i < Videos.rows.length; i++) {
            const User = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${Videos.rows[i].user_id}'`);
            UsersInfo.push(User.rows[0]);
        }
        const VideosInfo = Videos.rows;
        res.json({VideosInfo, UsersInfo});
    }
    async getResultVideo(req, res) {
        const {search} = req.body;
        const ResultUser = await db.query(`SELECT login, name, description, avatar FROM public."Users" where name ILIKE '%' || '${search}' || '%';`);
        const ResultVideo = await db.query(`SELECT name, path, preview, views, date, user_id FROM public."Videos" where name ILIKE '%' || '${search}' || '%';`);
        let UsersInfo = [];
        for (let i = 0; i < ResultVideo.rows.length; i++) {
            const User = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${ResultVideo.rows[i].user_id}'`);
            UsersInfo.push(User.rows[0]);
        }
        let ResultUsers = ResultUser.rows;
        let ResultVideos = ResultVideo.rows
        res.json({ResultUsers, ResultVideos, UsersInfo});
    }
    async getUsersVideo(req, res) {
        const {login} = req.body;
        const User = await db.query(`SELECT id, description, avatar, name, date FROM "Users" where login = '${login}'`);
        const userInfo = User.rows[0];
        const id = User.rows[0].id;
        const userVideos = await db.query(`SELECT views, name, preview, path, date FROM "Videos" where user_id = ${id}`);
        const TotalViews = await db.query(`SELECT SUM(views) AS total_views FROM public."Videos" WHERE user_id = ${id} GROUP BY user_id`);
        const TotalVideos = await db.query(`SELECT COUNT(path) AS total_videos FROM public."Videos" WHERE user_id = ${id} GROUP BY user_id`);
        const Links = await db.query(`SELECT link FROM public."Links" WHERE user_id = ${id}`);
        const links = Links.rows;
        const totalViews = TotalViews.rows[0].total_views;
        const totalVideos = TotalVideos.rows[0].total_videos;
        const VideosViews = userVideos.rows.map(row => row.views);
        const VideosNames = userVideos.rows.map(row => row.name);
        const VideosPreviews = userVideos.rows.map(row => row.preview);
        const VideosPath = userVideos.rows.map(row => row.path);
        const VideosDate = userVideos.rows.map(row => row.date);
        res.json({links, userInfo, totalViews, totalVideos, VideosViews, VideosNames, VideosPreviews, VideosPath, VideosDate});
    }
} 

export default new VideoController();
