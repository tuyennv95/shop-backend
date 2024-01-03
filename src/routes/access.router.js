const accessController = require('../controllers/access.controller');

const router = require('express').Router();


//SignUp
router.post('/shop/signup', accessController.signUp)

module.exports = router;