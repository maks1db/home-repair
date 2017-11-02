const express = require('express');
const costModel = require('../models/cost');
const repairModel = require('../models/repair');
const planModel = require('../models/plan');
const crud = require('../crud');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

/**
 * CRUD objects
 */
router.use('/costs', adminMiddleware, new crud(costModel).init());
router.use('/repair', adminMiddleware, new crud(repairModel).init());
router.use('/plan', adminMiddleware, new crud(planModel).init());

module.exports = router;