import db from '../db.js';

class AnswerController {
    async AnswerCreate(req, res) {
        const {UId, CommentId, text} = req.body;
        const currentDate = new Date();
        await db.query(`INSERT INTO "Answers" (user_id, comment_id, text, date) VALUES ($1, $2, $3, $4) RETURNING *`, [UId, CommentId, text, currentDate]);
        res.json({ message: "Ответ написан"});
    }
    async getAnswers(req, res) {
        const {video} = req.body;
        const Answers = await db.query(`SELECT id, date, text, user_id FROM "Answers" where video = '${video}'`);
        const answers = Answers.rows;
        let UsersInfo = [];
        for (let i = 0; i < Answers.rows.length; i++) {
            const User = await db.query(`SELECT login, name, avatar FROM "Users" where id = '${Answers.rows[i].user_id}'`);
            UsersInfo.push(User.rows[0]);
        }
        res.json({answers, UsersInfo});
    }
    // async getSelfProfile(req, res) {
    //     const {id} = req.body;
    //     const Profile = await db.query(`SELECT login, avatar FROM "Users" where id = '${id}'`);
    //     res.json(Profile.rows[0]);
    // }
    // async getCountAnswer(req, res) {
    //     const {path} = req.body;
    //     const CountAnswer = await db.query(`SELECT count(video) FROM "Answers" where video = '${path}'`);
    //     res.json(CountAnswer.rows[0]);
    // }
    async deleteAnswer(req, res) {
        const {id} = req.body;
        await db.query(`DELETE FROM "Answers" WHERE id = ${id}`);
        res.json({message: "Ответ удален"});
    }
} 

export default new AnswerController();
