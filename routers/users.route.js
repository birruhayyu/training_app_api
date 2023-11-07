const router = require('express').Router();

const UserController = require('../controllers/users.controller');

router.post('/registration', UserController.register);

module.exports = router;