const express = require("express");

const router = express.Router();

const articleControllers = require("./controllers/articleControllers");

router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);

module.exports = router;
