const contactsController = {};
const connectToDatabase = require("../db/connect.js");

contactsController.getAllContacts = async (req, res, next) => {
  try {
    const db = await connectToDatabase();
    const contacts = db.collection("contacts");

    contacts.find({}).toArray((error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: error });
        return;
      }
      res.json(results);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error connecting to database");
  }
};

module.exports = contactsController;
