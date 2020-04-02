const {body} = require("express-validator/check");

exports.hasUsername = body("username")
    .isLowercase()
    .withMessage("username is required . lowercase");
exports.hasName = body("name")
    .isLength({min:5})
    .withMessage("name is requiered");
exports.isEmail = body("email")
    .isEmail()
    .withMessage("email must be correct");

exports.hasMajor = body("major")
    .isLength({min:3})
    .withMessage("major is required");

exports.hasPassword = body("password")
    .exists()
    .withMessage("password is required");
    
exports.hasPhone = body("phone")
    .isMobilePhone()
    .withMessage("phone is required");

exports.hasCity = body("city")
    .isLength({min: 4})
    .withMessage("city is unvalid");
    