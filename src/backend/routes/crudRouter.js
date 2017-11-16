const express = require('express');
const costModel = require('../models/cost');
const repairModel = require('../models/repair');
const planModel = require('../models/plan');
const ideaModel = require('../models/idea');
const crud = require('../crud');
const adminMiddleware = require('../middlewares/adminMiddleware');
const ideaMiddleware = require('../middlewares/ideaMiddleware');

const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        let l = file.originalname.split('.');

        cb(null, `${Date.now().valueOf() + Math.round(1,500)}${l.length > 1 ? '.' + l[l.length-1] : '' }`);
    }
});
const upload = multer({ storage });

/**
 * CRUD objects
 */
router.use('/costs', adminMiddleware, new crud(costModel).init());
router.use('/repair', adminMiddleware, new crud(repairModel).init());
router.use('/plan', adminMiddleware, new crud(planModel).init());
const ideaCrud = new crud(ideaModel);

router.use('/idea', [
    adminMiddleware, 
    upload.single('img'), 
    ideaMiddleware, 
    ideaCrud.init()]);
module.exports = router;