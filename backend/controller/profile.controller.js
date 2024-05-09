import db from '../db.js';

class ProfileController {
    async createProfile(req, res) {
        const {login, name, description, avatar} = req.body;
        const setPrfoile = await db.query(`UPDATE "Users" set name = $1, description = $2, avatar = $3 where login = '${login}' RETURNING *`, 
        [name, description, avatar]);
        res.json(setPrfoile.rows[0]);
    }
    async chekProfile(req, res) {
        const {login, name} = req.body;
        const Prfoile = await db.query(`SELECT name FROM "Users" where login = '${login}'`);
        
        // if (Prfoile.rows.length === 0) {

        // } else {
        // }
        res.json(Prfoile.rows[0]);
    }
} 

export default new ProfileController();
