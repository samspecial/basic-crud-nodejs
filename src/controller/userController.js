const User = require("../model/user");

exports.createUser = (req, res) => {
  const { name, email, country } = req.body;
  User.create(
    {
      name,
      email,
      country,
    },
    (err, newUser) => {
      if (err) return res.status(500).json({ message: err });
      return res
        .status(200)
        .json({ message: "new user added successfully", newUser });
    }
  );
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
    else if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, country } = req.body;
  User.findByIdAndUpdate(id, { name, email, country }, (err, user) => {
    if (err) return res.status(500).json({ message: err });
    else if (!user) return res.status(404).json({ message: "User not found" });
    user.save((err, savedUser) => {
      if (err) return res.status(400).json({ message: err });
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
    else if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ message: "User successfully deleted" });
  });
};
