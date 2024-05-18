import db from '../db.js';

class SubscribeController {
    async subscribe(req, res) {
        const { id, channel } = req.body; 
        try {
            const Subs = await db.query(`INSERT INTO "Subscribers" (user_id, channel) VALUES ($1, $2) RETURNING *`, [id, channel]);
            res.json(Subs.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка обработки subscribers данных' });
        }
    }
    async unsubscribe(req, res) {
        const { id, channel } = req.body; 
        try {
            const Subs = await db.query(`DELETE FROM "Subscribers" WHERE user_id = $1 and channel = $2 RETURNING *`, [id, channel]);
            res.json(Subs.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка обработки subscribers данных' });
        }
    }
    async GetSubscriptions(req, res) {
        const { id } = req.body; 
        try {
            const Subs = await db.query(`SELECT channel FROM "Subscribers" WHERE user_id = ${id}`);
            const subs = Subs.rows;
            let SubsInfo = [];
            for (let i = 0; i < Subs.rows.length; i++) {
                const SubInfo = await db.query(`SELECT avatar, name FROM "Users" WHERE login = '${(Subs.rows[i].channel)}'`);
                SubsInfo.push(SubInfo.rows[0]);
            }
            res.json({subs, SubsInfo});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка обработки subscribers данных' });
        }
    }
    async GetUserSubscriptions(req, res) {
        const { login } = req.body; 
        const User = await db.query(`SELECT id FROM "Users" where login = '${login}'`);
        const id = User.rows[0].id;
        try {
            const Subs = await db.query(`SELECT channel FROM "Subscribers" WHERE user_id = ${id}`);
            const subs = Subs.rows;
            let SubsInfo = [];
            for (let i = 0; i < Subs.rows.length; i++) {
                const SubInfo = await db.query(`SELECT avatar, name FROM "Users" WHERE login = '${(Subs.rows[i].channel)}'`);
                SubsInfo.push(SubInfo.rows[0]);
            }
            res.json({subs, SubsInfo});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка обработки subscribers данных' });
        }
    }
    async ChekSubs(req, res) {
        const { login } = req.body; 
        const User = await db.query(`SELECT user_id FROM "Subscribers" where channel = '${login}'`);
        if (typeof User.rows[0] != 'undefined') {
            try {
                res.json(User.rows);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Ошибка обработки subscribers данных' });
            }
        }
    }
    async CountSub(req, res) {
        const { channel } = req.body; 
        const Count = await db.query(`SELECT COUNT(user_id) FROM "Subscribers" WHERE channel = '${channel}'`);
        try {
            res.json(Count.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка обработки subscribers данных' });
        }
    }
    async CountSelfSub(req, res) {
        const { id } = req.body; 
        const UserLogin = await db.query(`SELECT login FROM "Users" WHERE id = '${id}'`);
        const Count = await db.query(`SELECT COUNT(user_id) FROM "Subscribers" WHERE channel = '${UserLogin.rows[0].login}'`);
        try {
            res.json(Count.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка обработки subscribers данных' });
        }
    }
} 

export default new SubscribeController();
