const router = require("express").Router();
const homeController = require("../controllers/homeController.js");

// Routes
router.get("/", homeController.DisplayMessage);

module.exports = router;
