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
// const newUser = new User({
//   name: "Abdulhamid",
//   age: 25,
//   email: "mobolaji2309@gmail.com",
//   address: {
//     street: "No 10, Ojodu Berger",
//     city: "Lagos",
//     postCode: 100001,
//   },
//   customData: {
//     hobbies: ["coding", "reading", "gaming"],
//     favColor: "blue",
//   },
// });

// newUser
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
// // create()

// User.create({
//   name: "Mobolaji",
//   age: 25,
//   email: "bolade@yahoo.com",
//   address: {
//     street: "No 10, Ojodu Berger",
//     city: "Lagos",
//     postCode: 100001,
//   },
//   customData: {
//     hobbies: ["coding", "reading", "gaming"],
//     favColor: "blue",
//   },
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// // insertMany()

// User.insertMany([
//   {
//     name: "Delere",
//     age: 39,
//     email: "omodele@gmail.com",
//     address: {
//       street: "No 10, Ojodu Berger",
//       city: "Lagos",
//       postCode: 100001,
//     },
//     customData: {
//       hobbies: ["coding", "reading", "gaming"],
//       favColor: "blue",
//     },
//   },
//   {
//     name: "Delere",
//     age: 39,
//     email: "dayo@gmail.com",
//     address: {
//       street: "No 10, Ojodu Berger",
//       city: "Lagos",
//       postCode: 100001,
//     },
//     customData: {
//       hobbies: ["coding", "reading", "gaming"],
//       favColor: "blue",
//     },
//   },
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// Read Operation

// User.find()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// User.findOne({ name: "Mobolaji" })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// User.findById("60f6f7f1f7c6c1b1f0f3e3f6");

// const findUsers = async () => {
//   try {
//     const users = User.find().where("age").gte(27).sort("name").select("name");
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };

// Updating document

const updateDoc = async () => {
  try {
    const user = await User.findOneAndUpdate(
      { name: "Mobolaji" },
      { name: "Mobolaji", age: 26 },
      { new: true }
    );
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
updateDoc();

// const updateById = async () => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       "60f6f7f1f7c6c1b1f0f3e3f6",
//       { name: "Mobolaji", age: 26 },
//       { new: true }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateById();

// set and unset operator

// const updateUsingSet = async () => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { name: "Mobolaji" },
//       { $set: { "address.city": "Ibadan" } },
//       { new: true }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// // unset operator
// const updateUsingUnset = async () => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { name: "Mobolaji" },
//       { $unset: { "address.city": "Ibadan" } },
//       { new: true }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// // addToSet opaerator (push) and pull operator (remove)
// const updateUsingAddToSet = async () => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { name: "Mobolaji" },
//       { $addToSet: { "customData.hobbies": "singing" } },
//       { new: true }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const updateUsingPull = async () => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { name: "Mobolaji" },
//       { $pull: { "customData.hobbies": "singing" } },
//       { new: true }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // increment and multiplication operators

// const updateUsingInc = async () => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { name: "Mobolaji" },
//       { $inc: { age: 1 } },
//       { new: true }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const updateUsingMul = async () => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { name: "Mobolaji" },
//       { $mul: { age: 2 } },
//       { new: true }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // pop

// const updateUsingPop = async () => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { name: "Mobolaji" },
//       { $pop: { "customData.hobbies": -1 } },
//       { new: true }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };

// Start the sever

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
