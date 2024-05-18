import express from 'express';
import ProfileController from '../controller/profile.controller.js';
const router = express.Router();
router.post('/userInfo', ProfileController.getInfoUser); 
router.post('/profileLink', ProfileController.addLink); 
router.post('/getLink', ProfileController.getLink); 
router.put('/profileLinkUpdate', ProfileController.updateLink); 
router.delete('/profileLinkDelete', ProfileController.deleteLink);
router.put('/profile', ProfileController.createProfile);
router.post('/ChekProfile', ProfileController.chekProfile);
router.post('/headerInfo', ProfileController.getHeaderInfo);

export default router;