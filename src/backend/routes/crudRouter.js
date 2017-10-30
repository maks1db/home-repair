const express = require('express');
const costModel = require('../models/cost');
const crud = require('../crud');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

/**
 * users
 */
router.use('/costs', adminMiddleware, new crud(costModel).init());

module.exports = router;