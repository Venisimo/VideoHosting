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
        if (WatchVideo.rows.length !== 0) {
            const NewView = WatchVideo.rows[0].views + 1;
            await db.query(`UPDATE "Videos" set views = $1 where path = '${path}' RETURNING *`, [NewView]);
            const UserId = WatchVideo.rows[0].user_id;
            const User = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${UserId}'`);
            const VideoInfo = WatchVideo.rows[0];
            const UserInfo = User.rows[0];
            res.json({VideoInfo, UserInfo, UserId});
        } else {
            return res.status(404).json( {message: `видео нет(`} )
        }
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
        const ResultUser = await db.query(`SELECT login, name, description, avatar FROM "Users" where name ILIKE '%' || '${search}' || '%';`);
        const ResultVideo = await db.query(`SELECT name, path, preview, views, date, user_id FROM "Videos" where name ILIKE '%' || '${search}' || '%';`);
        let UsersInfo = [];
        let CountsSubs = [];
        for (let i = 0; i < ResultVideo.rows.length; i++) {
            const User = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${ResultVideo.rows[i].user_id}'`);
            UsersInfo.push(User.rows[0]);
        }
        let ResultUsers = ResultUser.rows;
        for (let i = 0; i < ResultUsers.length; i++) {
            const CountSub = await db.query(`SELECT COUNT(user_id) FROM "Subscribers" WHERE channel = '${ResultUsers[i].login}'`);
            CountsSubs.push(CountSub.rows[0])
        } 
        let ResultVideos = ResultVideo.rows
        res.json({ResultUsers, ResultVideos, UsersInfo, CountsSubs});
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
        let totalViews = 0;
        let totalVideos = 0;
        if (TotalVideos.rows.length !== 0) {
            totalViews = TotalViews.rows[0].total_views;
            totalVideos = TotalVideos.rows[0].total_videos;
        }
        const VideosViews = userVideos.rows.map(row => row.views);
        const VideosNames = userVideos.rows.map(row => row.name);
        const VideosPreviews = userVideos.rows.map(row => row.preview);
        const VideosPath = userVideos.rows.map(row => row.path);
        const VideosDate = userVideos.rows.map(row => row.date);
        res.json({links, userInfo, totalViews, totalVideos, VideosViews, VideosNames, VideosPreviews, VideosPath, VideosDate});
    }
    async getSelfInfoVideo(req, res) {
        const {id} = req.body;
        const TotalViews = await db.query(`SELECT SUM(views) AS total_views FROM public."Videos" WHERE user_id = ${id} GROUP BY user_id`);
        const TotalVideos = await db.query(`SELECT COUNT(path) AS total_videos FROM public."Videos" WHERE user_id = ${id} GROUP BY user_id`);
        let totalViews = 0;
        let totalVideos = 0;
        if (TotalVideos.rows.length !== 0) {
            totalViews = TotalViews.rows[0].total_views;
            totalVideos = TotalVideos.rows[0].total_videos;
        }
        res.json({totalViews, totalVideos});
    }
    async addHistory(req, res) {
        const {id, path} = req.body;
        const HistoryVideos = await db.query(`SELECT path FROM "History watch" where user_id = $1 and path = $2`, [id, path]);
        if (HistoryVideos.rows.length !== 0) {
            await db.query(`UPDATE "History watch" set user_id = $1, path = $2 where user_id = '${id}' and path = '${path}' RETURNING *`, [id, path]);
        } else {
            await db.query(`INSERT INTO "History watch" (user_id, path) values ($1, $2) RETURNING *`, [id, path]);   
        }
        res.json({message: `добавлено в историю просмторов`});
    }
    async getHistory(req, res) {
        const {id} = req.body;
        const HistoryVideos = await db.query(`SELECT path FROM "History watch" where user_id = $1`, [id]);
        const historyVideos = HistoryVideos.rows;
        let UsersInfo = [];
        let VideosInfo = [];
        for (let i = 0; i < HistoryVideos.rows.length; i++) {
            const VideoInfo = await db.query(`SELECT user_id, preview, views, date, name FROM "Videos" where path = '${HistoryVideos.rows[i].path}'`);
            if (typeof VideoInfo.rows[0] !== 'undefined') {
                VideosInfo.push(VideoInfo.rows[0])
            }
            // console.log(VideosInfo);     
        }
        for (let i = 0; i < VideosInfo.length; i++) {
            const UserInfo = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${VideosInfo[i].user_id}'`);
            UsersInfo.push(UserInfo.rows[0]);
        }
        res.json({UsersInfo, historyVideos, VideosInfo});
    }
    async deleteHistory(req, res) {
        const {id} = req.body;
        await db.query(`DELETE FROM "History watch" where user_id = $1`, [id]);
    }
    async searchHistory(req, res) {
        const {id, name} = req.body;
        const HistoryVideos = await db.query(`SELECT path FROM "History watch" where user_id = $1`, [id]);
        const historyVideos = HistoryVideos.rows;
        let UsersInfo = [];
        let VideosInfo = [];
        for (let i = 0; i < HistoryVideos.rows.length; i++) {
            const VideoInfo = await db.query(`SELECT user_id, preview, views, date, path, name FROM "Videos" where path = '${HistoryVideos.rows[i].path}' 
            and name ILIKE '%' || '${name}' || '%'`);
            if (typeof VideoInfo.rows[0] !== 'undefined') {
                VideosInfo.push(VideoInfo.rows[0]);
            }
        }
        for (let i = 0; i < VideosInfo.length; i++) {
            const UserInfo = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${VideosInfo[i].user_id}'`);
            UsersInfo.push(UserInfo.rows[0]);
        }
        res.json({UsersInfo, historyVideos, VideosInfo});
    }
} 

export default new VideoController();