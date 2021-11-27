const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: "String",
    unique: true,
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  date: {
    type: "Date",
    default: new Date(),
  },
});

module.exports = model("User", userSchema);
