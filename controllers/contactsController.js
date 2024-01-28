const ObjectId = require("mongodb").ObjectId;
const e = require("express");
const connectToDatabase = require("../db/connect.js");

const contactsController = {};

// GET
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
  const contactId = new ObjectId(req.params.id);
  if (!ObjectId.isValid(contactId)) {
    return res.status(400).send("Invalid ID format");
  }
  getContacts({ _id: contactId }, res); // use contactId directly
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

// POST

// addContact
contactsController.addContact = async (req, res, next) => {
  try {
    const newContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };
    const db = await connectToDatabase("cse341");
    const contacts = db.collection("contacts");
    const result = await contacts.insertOne(newContact);
    if (result.insertedId) {
      res.status(201).json({ message: "Contact added", id: result.insertedId });
    } else {
      res.status(500).json({ message: "Error adding contact" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error connecting to database");
  }
};

// PUT
contactsController.updateContact = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const UpdatedContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };
    const db = await connectToDatabase("cse341");
    const contacts = db.collection("contacts");
    const results = await contacts.updateOne(
      { _id: contactId },
      { $set: UpdatedContact }
    );
    if (results.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json({ message: "An error occurred while updating the contact." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error connecting to database");
  }
};

// DELETE
contactsController.deleteContact = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const db = await connectToDatabase("cse341");
    const contacts = db.collection("contacts");
    const results = await contacts.deleteOne({ _id: contactId });
    if (results.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json({ message: "An error occurred while deleting the contact." });
    }
  } catch (error) {
    console.log("Error deleting contact:", error);
    res.status(500).send("Error connecting to database: " + error);
  }
};

module.exports = contactsController;
