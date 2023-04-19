const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

// create quastion schema

const answerschema = new Schema(
  {
    answer: {
      type: String,
      required: [true, "pleas add answer"],
    },
    quastion_id: {
      type: ObjectId,
      ref: "Quastion",
      required: [true, "pleas add id of the quastion to be answer"],
    },
    UserName: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
answerschema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

// model intract with the modele  the collection of that name
// workout used to
module.exports = mongoose.model("Answer", answerschema);
