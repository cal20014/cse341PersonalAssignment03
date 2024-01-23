const ObjectId = require("mongodb").ObjectId;
const connectToDatabase = require("../db/connect.js");

const contactsController = {};

const getContacts = async (filter, res) => {
  try {
    const db = await connectToDatabase("cse341");
    const contacts = db.collection("contacts");

    const result = await contacts.find(filter);
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error connecting to database");
  }
};

contactsController.getAllContacts = (req, res, next) => {
  getContacts({}, res);
};

contactsController.getSingleContactById = (req, res, next) => {
  const contactId = req.params.id;
  if (!ObjectId.isValid(contactId)) {
    return res.status(400).send("Invalid ID format");
  }
  getContacts({ _id: new ObjectId(contactId) }, res);
};

contactsController.getContactsByFirstName = (req, res, next) => {
  getContacts({ firstName: req.params.firstName }, res);
};

contactsController.getContactsByFavoriteColor = (req, res, next) => {
  getContacts(
    { favoriteColor: { $regex: new RegExp(req.params.favoriteColor, "i") } },
    res
  );
};

contactsController.getContactsByBirthdayMonth = (req, res, next) => {
  getContacts({ birthday: { $regex: new RegExp(req.params.month) } }, res);
};

module.exports = contactsController;
