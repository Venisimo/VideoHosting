import express from 'express';
import ratingController from '../controller/rating.controller.js';
const router = express.Router();

router.post('/like', ratingController.like);
router.post('/dislike', ratingController.dislike);
router.post('/getLD', ratingController.CountLike);
router.post('/chekSelfLD', ratingController.ChekLikeDislike);

export default router;