const router = require("express").Router();
const homeRoutes = require("./homeRoute.js");
const professionalRoutes = require("./professionalRoute.js");
const contactsRoute = require("./contactsRoute.js");
const swagger = require("./swaggerRoutes.js");

// Routes
router.use("/", swagger);
router.use("/home", homeRoutes);
router.use("/professional", professionalRoutes);
router.use("/contacts", contactsRoute);

module.exports = router;
