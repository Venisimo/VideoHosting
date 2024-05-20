import express from 'express';
import videoController from '../controller/video.controller.js';
const router = express.Router();

router.post('/getSelfVideo', videoController.getSelfVideo);
router.post('/getWatchVideo', videoController.getWatchVideo);
router.post('/getResultVideo', videoController.getResultVideo);
router.post('/getUsersVideo', videoController.getUsersVideo);
router.post('/userInfoVideos', videoController.getSelfInfoVideo);
router.post('/getStartVideo', videoController.getStartVideo);
router.post('/addHistory', videoController.addHistory);
router.post('/getHistory', videoController.getHistory);
router.post('/deleteHistory', videoController.deleteHistory);
router.post('/searchHistory', videoController.searchHistory);
export default router;