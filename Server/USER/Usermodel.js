const mongoos = require("mongoose");
const Schema = mongoos.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");
const userschema = new Schema({
  email: {
    type: String,
    require: true,
    required: [true, "pleas Enter the email"],
  },
  UserName: {
    type: String,
    required: [true, "pleas Enter the UserName"],
  },
  FirstName: {
    type: String,
    required: [true, "pleas Enter the FirstName"],
  },
  LastName: {
    type: String,
    required: [true, "pleas Enter the LastName"],
  },
  password: {
    type: String,
    required: [true, "pleas Enter the password"],
  },
});
userschema.statics.signup = async function (
  email,
  password,
  UserName,
  FirstName,
  LastName
) {
  // validation
  // if (!email || !password || !UserName || !FirstName || !LastName) {
  //   throw Error("All field must be filled");
  // }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("email alrady in use");
  }
  // mypasword make hash by bcrypt
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    email,
    UserName,
    FirstName,
    LastName,
    password: hash,
  });
  return user;
};
// FOR LOGIN
userschema.statics.login = async function (email, password, FirstName) {
  if (!email || !password) {
    throw Error("All field must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrct email");
  }
  // if (user) {
  //   console.log(user);
  // }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  // console.log(user);
  // console.log(user.FirstName);
  return user;
};

module.exports = mongoos.model("User", userschema);
