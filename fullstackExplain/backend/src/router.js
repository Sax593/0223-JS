const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const characterControllers = require("./controllers/characterControllers");

router.get("/character", characterControllers.browse);
router.get("/character/:id", characterControllers.read);
router.put("/character/:id", characterControllers.edit);
router.post("/character", characterControllers.add);
router.delete("/character/:id", characterControllers.destroy);

module.exports = router;
