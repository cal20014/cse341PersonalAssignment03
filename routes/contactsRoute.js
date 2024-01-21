const router = require("express").Router();
const contactsController = require("../controllers/contactsController.js");

router.get("/", contactsController.getAllContacts);

module.exports = router;
