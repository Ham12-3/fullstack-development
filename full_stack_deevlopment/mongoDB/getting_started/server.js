const express = require("express");

// create the app object using express module
const app = express();

const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;

// dotenv confguration to use environment variables
require("dotenv").config();
// connect to mongodb server using MongoClient

// mongodb+srv://abdulhamid:omolara@cluster0.y0p7r3e.mongodb.net/studentDatabase

// 1. Create the Client object using MongoClient
const client = new MongoClient("mongodb://localhost:27017/masynctech", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect
async function connect() {
  try {
    // 2. Connect to the server using the client object
    await client.connect();
    console.log("Connected to the server");

    const database = client.db("masynctech");
    const employees = database.collection("employees");
    const employeesDocs = [
      {
        name: "Abdulhamid",
        age: 25,
        department: "IT",
      },
      {
        name: "Omolara",
        age: 23,
        department: "Admin",
      },
      {
        name: "Aisha",
        age: 20,
        department: "HR",
      },
      {
        name: "Taiwo",
        age: 30,

        department: "Finance",
      },
    ];

    const results = await employees.insertMany(employeesDocs);
    console.log(results);
    // logical operators in mongodb

    const query = {
      $or: [{ age: { $lt: 25 } }, { department: "HR" }],
    };
  } catch (error) {
    console.error("Error connecting to the server", error);
  }
}

// Call the connect function
connect();

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
// Path: full_stack_deevlopment/mongoDB/getting_started/server.js
