import express from 'express';
import CommentController from '../controller/comment.controller.js';
const router = express.Router();
router.post('/addComment', CommentController.commentCreate);
router.post('/getComments', CommentController.getComments);
router.post('/getProfileForComment', CommentController.getSelfProfile);
router.post('/getCountComment', CommentController.getCountComment);
router.post('/deleteComment', CommentController.deleteComment);

export default router;
