import db from '../db.js'
import { validationResult } from 'express-validator';
class UserController {
    async regestration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new Error("Ошибка при регистрации");
            } 
            const {email, login, password} = await req.body;
            const chekName = await db.query(`SELECT login FROM "Users" where login = '${login}'`);
            if (chekName.rows.length !== 0) {
                throw new Error("Пользователь с таким именем уже существует");
            }
            const checkEmail = await db.query(`SELECT email FROM "Users" where email = '${email}'`);
            if (checkEmail.rows.length !== 0) {
                throw new Error("Пользователь с такой почтой уже существует");
            }
            const currentDate = new Date();

            const user = await db.query(`INSERT INTO "Users" (email, login, password, date) values ($1, $2, $3, $4) RETURNING *`, 
            [email, login, password, currentDate]);
            res.json({ message: "Пользователь успешно зарегистрирован", user: user.rows[0] });
        } catch(e) {
            return res.status(400).json( {message: `${e}`} )
        }
    }
}


export default new UserController();