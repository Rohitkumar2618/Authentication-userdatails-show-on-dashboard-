// const mongoose = require("mongoose");

// const UsersSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const UsersModel = mongoose.model("User", UsersSchema); // Corrected the model creation

// module.exports = UsersModel; // Export the model

const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UsersModel = mongoose.model("User", UsersSchema);

module.exports = UsersModel;
