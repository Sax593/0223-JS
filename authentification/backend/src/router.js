const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const loginControllers = require("./controllers/loginControllers");
const hashedPassword = require("./services/hashedPassword");

router.post("/login/users", loginControllers.login);
router.post("/register", hashedPassword, loginControllers.register);

module.exports = router;
