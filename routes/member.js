const express = require('express');
const router = express.Router();
const { hasUsername, isEmail, hasMajor} = require('../validations/validators');
const memberController = require('../controllers/memberController');

router.get("/", memberController.index);
router.get("/:id", memberController.show);
router.post("/",
hasMajor, 
isEmail,
hasUsername, 
memberController.store);

router.patch("/:id", hasUsername, memberController.update);
router.delete("/:id", memberController.delete);

module.exports = router;