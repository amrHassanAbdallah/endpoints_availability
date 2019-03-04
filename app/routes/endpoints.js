const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController.js");


router.get('fast/test/:number', indexController.get);
router.get('slow/test/:number', indexController.delayedGet);


module.exports = router;