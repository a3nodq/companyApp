const express = require('express');
const router = express.Router();
const { hasName, isEmail, hasMajor, hasPhone, hasCity} = require('../validations/validators');
const recoursController = require('../controllers/resourceController');

router.get("/", recoursController.index);
router.get("/:id", recoursController.show);
router.post("/",
hasPhone,
isEmail,
hasName, 
recoursController.store);

router.patch("/:id",
hasName, 
recoursController.update);
router.delete("/:id", recoursController.delete);

router.get("/", recoursController.search);

module.exports = router;