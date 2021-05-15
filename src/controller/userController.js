const User = require("../model/user");

exports.createUser = (req, res) => {
  const { name, email, country } = req.body;

  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "Email already exist" });
    }
    const newUser = new User({
      name,
      email,
      country,
    });
    return newUser
      .save()
      .then(() => {
        res
          .status(200)
          .json({ message: "New user added successfully", newUser });
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  });
};

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).json({ message: err });
    return res.status(200).json({ users });
  });
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, user) => {
    if (err) return res.status(404).json({ err });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, country } = req.body;
  User.findByIdAndUpdate(id, { name, email, country }, (err, user) => {
    if (err) return res.status(500).json({ message: err });
    if (!user) return res.status(404).json({ message: "User not found" });
    return user.save((error, savedUser) => {
      if (error) return res.status(400).json({ message: error });
      return res
        .status(200)
        .json({ message: "User successfully updated", savedUser });
    });
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return res.status(404).json({ err });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ message: "User successfully deleted" });
  });
};
