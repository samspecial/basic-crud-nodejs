const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userController");

router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.getUser);
router.get("/", userCtrl.getUsers);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);


module.exports = router;