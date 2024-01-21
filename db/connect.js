const { MongoClient } = require("mongodb");

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    console.log("Database is connected!");
    const db = client.db("cse341");
    return db;
  } catch (error) {
    console.log("Error connecting to database!");
    throw new Error(error);
  }
};

module.exports = connectToDatabase;
