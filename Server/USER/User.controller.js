const User = require("./Usermodel");
const jwt = require("jsonwebtoken");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
// for signup
const signup = async (req, res) => {
  const { email, password, UserName, FirstName, LastName } = req.body;
  try {
    const user = await User.signup(
      email,
      password,
      UserName,
      FirstName,
      LastName
    );
    // create token
    const token = createToken(user._id);
    res.status(200).json({ email, UserName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// for login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const name = user.UserName;
    // create token

    const token = createToken(user._id);
    // console.log(user._id);
    res.status(200).json({ email, token, name });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signup, login };
