const express = require('express');
const router = express.Router();
const userBalanceMetaController = require('../controllers/userBalanceMeta.controller');

router.get('/', userBalanceMetaController.getAllUserBalanceMetas);
router.get('/:id', userBalanceMetaController.getUserBalanceMetaById);
router.post('/', userBalanceMetaController.createUserBalanceMeta);
router.put('/:id', userBalanceMetaController.updateUserBalanceMeta);
router.delete('/:id', userBalanceMetaController.deleteUserBalanceMeta);

router.get('/:userId/balance/:coinId', userBalanceMetaController.getUserBalanceByUserIdAndCoinId);
router.put('/:userId/balance/:coinId', userBalanceMetaController.updateUserBalanceByUserIdAndCoinId);

module.exports = router;
