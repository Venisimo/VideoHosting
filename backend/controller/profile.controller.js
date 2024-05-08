import { query } from '../db.js';

class ProfileController {
    async createProfile(req, res) {
        const {name, description, avatar} = req.body;
        const newPerson = await query(`INSERT INTO Users (name, description, avatar) values ($1, $2, $3) RETURNING *`, 
        [name, description, avatar]);
        res.json(newPerson.rows[0]);
    }
} 

export default new ProfileController();
