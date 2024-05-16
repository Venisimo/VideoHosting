import db from '../db.js';

class SubscribeController {
    async subscribe(req, res) {
        const { id, channel } = req.body; 
        try {
            const Subs = await db.query(`INSERT INTO "Subscribers" (user_id, channel) VALUES ($1, $2) RETURNING *`, [id, channel]);
            res.json(Subs.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка при добавлении ссылок' });
        }
    }
} 

export default new SubscribeController();
