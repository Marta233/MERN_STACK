const mongoose = require("mongoose");
const User = require("../USER/Usermodel");
const Schema = mongoose.Schema;

// create quastion schema

const quastionschema = new Schema(
  {
    quastionTitle: {
      type: String,
      required: true,
    },
    quastiondescription: {
      type: String,
      required: true,
    },
    UserName: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
quastionschema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

// model intract with the modele  the collection of that name
// workout used to
module.exports = mongoose.model("Quastion", quastionschema);
