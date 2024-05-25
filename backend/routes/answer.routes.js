import express from 'express';
import AnswerController from '../controller/answer.controller.js';
const router = express.Router();
router.post('/addAnswer', AnswerController.AnswerCreate);
// router.post('/getComments', CommentController.getComments);
// router.post('/getProfileForComment', CommentController.getSelfProfile);
// router.post('/getCountComment', CommentController.getCountComment);
router.post('/deleteAnswer', AnswerController.deleteAnswer);

export default router;
