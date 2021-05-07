const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/user");

router.post("/", createUser);
router.get("/:id", getUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router;