const router = require("express").Router();
const contactsController = require("../controllers/contactsController.js");

router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getSingleContactById);
router.get("/f-name/:firstName", contactsController.getContactsByFirstName);
router.get(
  "/color/:favoriteColor",
  contactsController.getContactsByFavoriteColor
);
router.get("/b-month/:month", contactsController.getContactsByBirthdayMonth);

module.exports = router;
