import db from '../db.js';

class RatingController {
    async like(req, res) {
        const {id, path} = req.body;
        const chekLike = await db.query(`SELECT name FROM "Likes" WHERE user_id = $1 AND  name = $2`, [id, path]);
        if (chekLike.rows.length === 0) {
            await db.query(`INSERT INTO "Likes"(name, user_id) VALUES ($1, $2)`, [path, id]);
        } else {
            await db.query(`DELETE FROM "Likes" WHERE name = $1 AND user_id = $2`, [path, id]);
        }
        const chekDisLike = await db.query(`SELECT name FROM "Dislikes" WHERE user_id = $1`, [id]);
        if (chekDisLike.rows.length !== 0) {
            await db.query(`DELETE FROM "Dislikes" WHERE name = $1 AND user_id = $2`, [path, id]);
        }
        res.json({message: "Лайк поставлен/убран"});
    }
    async dislike(req, res) {
        const {id, path} = req.body;
        const chekDisLike = await db.query(`SELECT name FROM "Dislikes" WHERE user_id = $1 AND  name = $2`, [id, path]);
        if (chekDisLike.rows.length === 0) {
            await db.query(`INSERT INTO "Dislikes"(name, user_id) VALUES ($1, $2)`, [path, id]);
        } else {
            await db.query(`DELETE FROM "Dislikes" WHERE name = $1 AND user_id = $2`, [path, id]);
        }
        const chekLike = await db.query(`SELECT name FROM "Likes" WHERE user_id = $1 AND  name = $2`, [id, path]);
        if (chekLike.rows.length !== 0) {
            await db.query(`DELETE FROM "Likes" WHERE name = $1 AND user_id = $2`, [path, id]);
        }
        res.json({message: "Дизлайк поставлен/убран"});
    }
    async CountLike(req, res) {
        const {path} = req.body;
        const CountLike = await db.query(`SELECT COUNT(user_id) FROM "Likes" WHERE name = $1`, [path]);
        const CountDislike = await db.query(`SELECT COUNT(user_id) FROM "Dislikes" WHERE name = $1`, [path]);
        const countLike = CountLike.rows[0];
        const countDislike = CountDislike.rows[0];
        res.json({countLike, countDislike});
    }
    async ChekLikeDislike(req, res) {
        const {path, id} = req.body;
        const ChekLike = await db.query(`SELECT name FROM "Likes" WHERE user_id = $1 AND  name = $2`, [id, path]);
        const ChekDisLike = await db.query(`SELECT name FROM "Dislikes" WHERE user_id = $1 AND  name = $2`, [id, path]);
        const chekLike = ChekLike.rows[0];
        const chekDisLike = ChekDisLike.rows[0];
        res.json({chekLike, chekDisLike});
    }
} 

export default new RatingController();
