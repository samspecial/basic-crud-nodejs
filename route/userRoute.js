const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userController");

router.post("/user", userCtrl.createUser);
router.get("/user:id", userCtrl.getUser);
router.get("/user", userCtrl.getUsers);
router.put("/user:id", userCtrl.updateUser);
router.delete("/user:id", userCtrl.deleteUser);


module.exports = router;