const router = require("express").Router();
const professionalController = require("../controllers/professionalController.js");

router.get("/", professionalController.getData);

module.exports = router;
