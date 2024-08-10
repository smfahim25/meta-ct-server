const express = require('express');
const router = express.Router();
const referralHistoryController = require('../controllers/referralHistory.controller');

router.get('/', referralHistoryController.getAllReferralHistories);
router.get('/:id', referralHistoryController.getReferralHistoryById);
router.post('/', referralHistoryController.createReferralHistory);
router.put('/:id', referralHistoryController.updateReferralHistory);
router.delete('/:id', referralHistoryController.deleteReferralHistory);

module.exports = router;
