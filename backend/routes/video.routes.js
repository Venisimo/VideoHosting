import express from 'express';
import videoController from '../controller/video.controller.js';
const router = express.Router();

router.post('/getSelfVideo', videoController.getSelfVideo);
router.post('/getWatchVideo', videoController.getWatchVideo);
router.post('/getResultVideo', videoController.getResultVideo);
router.post('/getUsersVideo', videoController.getUsersVideo);
router.post('/userInfoVideos', videoController.getSelfInfoVideo);
router.post('/getStartVideo', videoController.getStartVideo);

export default router;