import db from '../db.js';

class CommentController {
    async commentCreate(req, res) {
        const {id, video, text} = req.body;
        const currentDate = new Date();
        await db.query(`INSERT INTO "Comments" (user_id, video, text, date) VALUES ($1, $2, $3, $4) RETURNING *`, [id, video, text, currentDate]);
        res.json({ message: "Коммент написан"});
    }
    async getComments(req, res) {
        const {video} = req.body;
        const Comments = await db.query(`SELECT id, date, text, user_id FROM "Comments" where video = '${video}'`);
        const comments = Comments.rows;
        let UsersInfo = [];
        let Answers = {
            answer: []
        };
        for (let i = 0; i < Comments.rows.length; i++) {
            const User = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${Comments.rows[i].user_id}'`);
            const Answer = await db.query(`SELECT id, date, text, user_id, comment_id FROM "Answers" where comment_id = ${Comments.rows[i].id}`);
            UsersInfo.push(User.rows[0]);
            Answers.answer.push(Answer.rows);
        }
        for (let i = 0; i < Answers.answer.length; i++) {
            if (Answers.answer[i].length > 0) {
                for (let j = 0; j < Answers.answer[i].length; j++) {
                    // console.log(Answers.answer[i][j].user_id);
                    if (typeof Answers.answer[i][j].user_id !== 'undefined') {
                        const User = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${Answers.answer[i][j].user_id}'`);
                        Answers.answer[i].push(User.rows);
                    }
                }
            }
        }
        res.json({comments, UsersInfo, Answers});
    }
    async getSelfProfile(req, res) {
        const {id} = req.body;
        const Profile = await db.query(`SELECT login, avatar FROM "Users" where id = '${id}'`);
        res.json(Profile.rows[0]);
    }
    async getCountComment(req, res) {
        const {path} = req.body;
        const CountComment = await db.query(`SELECT count(video) FROM "Comments" where video = '${path}'`);
        res.json(CountComment.rows[0]);
    }
    async deleteComment(req, res) {
        const {id} = req.body;
        await db.query(`DELETE FROM "Answers" WHERE comment_id = ${id}`);
        await db.query(`DELETE FROM "Comments" WHERE id = ${id}`);
        res.json({message: "Коммент удален"});
    }
} 

export default new CommentController();
