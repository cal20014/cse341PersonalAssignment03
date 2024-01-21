const router = require("express").Router();
const homeRoutes = require("./homeRoute.js");
const professionalRoutes = require("./professionalRoute.js");
const contactsRoute = require("./contactsRoute.js");

// Routes
router.use("/", homeRoutes);
router.use("/professional", professionalRoutes);
router.use("/contacts", contactsRoute);

module.exports = router;
