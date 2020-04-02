const express = require('express');
const router = express.Router();
const passportJWT = require("../middlewares/passportJWT");

const authController = require("../controllers/authController.js");
const {isEmail, hasPassword, hasPhone} = require("../validations/validators");


router.post('/login', authController.login);
router.post('/signup', isEmail, hasPassword, hasPhone, authController.signup);
router.get('/account', //passportJWT.authenticate(),
 authController.account);


module.exports = router;