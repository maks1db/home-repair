const express = require('express');
const costModel = require('../models/cost');
const repairModel = require('../models/repair');
const crud = require('../crud');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

/**
 * users
 */
router.use('/costs', adminMiddleware, new crud(costModel).init());
router.use('/repair', adminMiddleware, new crud(repairModel).init());

module.exports = router;