import express from 'express';
import subscribeController from '../controller/subscribe.controller.js';
const router = express.Router();

router.post('/subcribeOnChannel', subscribeController.subscribe);
router.delete('/unSubcribeOnChannel', subscribeController.unsubscribe);
router.post('/getSelfSubscriptions', subscribeController.GetSubscriptions);
router.post('/getUserSubscriptions', subscribeController.GetUserSubscriptions);
router.post('/ChekSubs', subscribeController.ChekSubs);
router.post('/CountSub', subscribeController.CountSub);
router.post('/CountSelfSub', subscribeController.CountSelfSub);

export default router;