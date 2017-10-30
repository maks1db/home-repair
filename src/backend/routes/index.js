const express  = require('express');

const router = express.Router();

router.use('/api/v1/auth', require('./loginRoute'));
router.use('/api/v1/login', require('./tokenRoute'));
router.use('/api/v1/crud', require('./crudRouter'));

module.exports = router;