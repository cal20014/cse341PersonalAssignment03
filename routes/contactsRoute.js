const router = require("express").Router();
const contactsController = require("../controllers/contactsController.js");

// get routes
router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getSingleContactById);
router.get("/f-name/:firstName", contactsController.getContactsByFirstName);
router.get(
  "/color/:favoriteColor",
  contactsController.getContactsByFavoriteColor
);
router.get("/b-month/:month", contactsController.getContactsByBirthdayMonth);

// post routes
router.post("/", contactsController.addContact);

// put routes
router.put("/:id", contactsController.updateContact);

// delete routes
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
