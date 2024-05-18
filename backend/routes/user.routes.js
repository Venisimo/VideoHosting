import express from 'express';
import UserController from '../controller/user.controller.js';
const router = express.Router();

router.post('/register', UserController.regestration);
router.post('/login', UserController.login);
router.post('/verifyToken', async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Токен не предоставлен' });
    }
    try {
        const decodedToken = await UserController.verifyToken(token);
        res.status(200).json({ message: 'Токен верифицирован', decodedToken });
    } catch (error) {
        return res.status(401).json({ error: 'Неверный токен' });
    }
});

export default router;