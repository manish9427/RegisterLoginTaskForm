const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { name, mobile, password } = req.body;

  try {
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      res.status(400).json({ error: "Mobile number already registered" });
      return;
    }

    const user = new User({
      name,
      mobile,
      password,
    });

    await user.save();
    res.sendStatus(200);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.loginUser = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const user = await User.findOne({ mobile, password });
    if (user) {
      res.sendStatus(200);
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Server error" });
  }
};
