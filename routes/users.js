const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
console.log("First");
router.get('/profile',usersController.profile);
router.get('/otherdetails',usersController.otherdetails);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn)
module.exports = router;