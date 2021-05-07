const User = require("../model/user");

const creatUser = (req, res) => {
    const { name, email, country } = req.body;
    const user = new User({
        name,
        email,
        country
    });
    user.save().then(() => {
        return res.status(201).json({
            message: "User successfully created",
            data: {
                name,
                email,
                country
            }
        })
    }).catch(error => {
        return res.status(404).json({
            message: "Error creating user",
            data: error
        })
    })
}

const getUsers = (req, res) => {
    User.find().then(user => {
        return res.status(200).json({
            message: "Users successfully sent",
            data: user
        })
    }).catch(error => res.status(404).json({ error }))
}

const getUser = (req, res) => {
    const { id } = req.params;
    User.findOne({ id }).then(user => {
        return res.status(200).json(user);
    }).catch(error => res.status(404).json({ error }))
}

module.exports = { creatUser, getUser }