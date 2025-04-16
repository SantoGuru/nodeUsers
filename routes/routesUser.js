const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/users", userControl.funcGetUsers);
router.get("/user",userControl.funcGetUser);
router.delete("/user",userControl.funcDeleteUser);
router.post("/user",userControl.funcCreateUser);

module.exports = router;