const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userController");

router.post("/users", userCtrl.createUser);
router.get("/users/:id", userCtrl.getUser);
router.get("/users", userCtrl.getUsers);
router.put("/users/:id", userCtrl.updateUser);
router.delete("/users/:id", userCtrl.deleteUser);


module.exports = router;