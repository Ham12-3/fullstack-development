const express = require("express");

const mongoose = require("mongoose");
const PORT = 5000 || process.env.PORT;

// Instance of express
const app = express();

// Connect to mongodb

const URL =
  "mongodb+srv://abdulhamid:omolara@cluster0.y0p7r3e.mongodb.net/studentDatabase";

const connectToDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
};

connectToDB();

// Design Schema

const userProfileSchema = new mongoose.Schema({
  objectId: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    postCode: Number,
  },
  customData: mongoose.Schema.Types.Mixed,
});

// Compile the schema to form the model

const User = mongoose.model("User", userProfileSchema);

// CRUD Operations

// begin with the create document operation

// save()
const newUser = new User({
  name: "Abdulhamid",
  age: 25,
  email: "mobolaji2309@gmail.com",
  address: {
    street: "No 10, Ojodu Berger",
    city: "Lagos",
    postCode: 100001,
  },
  customData: {
    hobbies: ["coding", "reading", "gaming"],
    favColor: "blue",
  },
});

newUser
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
// create()

User.create({
  name: "Mobolaji",
  age: 25,
  email: "bolade@yahoo.com",
  address: {
    street: "No 10, Ojodu Berger",
    city: "Lagos",
    postCode: 100001,
  },
  customData: {
    hobbies: ["coding", "reading", "gaming"],
    favColor: "blue",
  },
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// insertMany()

User.insertMany([
  {
    name: "Delere",
    age: 39,
    email: "omodele@gmail.com",
    address: {
      street: "No 10, Ojodu Berger",
      city: "Lagos",
      postCode: 100001,
    },
    customData: {
      hobbies: ["coding", "reading", "gaming"],
      favColor: "blue",
    },
  },
  {
    name: "Delere",
    age: 39,
    email: "dayo@gmail.com",
    address: {
      street: "No 10, Ojodu Berger",
      city: "Lagos",
      postCode: 100001,
    },
    customData: {
      hobbies: ["coding", "reading", "gaming"],
      favColor: "blue",
    },
  },
])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// Read Operation

// Start the sever
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
