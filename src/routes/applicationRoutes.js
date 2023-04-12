const express = require('express');
const applicationRouter = express.Router();
const applicationController = require('../controllers/applicationController');
// 
applicationRouter.get( '/', applicationController.index );

module.exports = applicationRouter;
