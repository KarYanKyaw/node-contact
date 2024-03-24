const router = require("express").Router();
const controller = require("../controller/login.controller");
const { Schema } = require("../utils/schema");
const { validateBody } = require("../utils/validator");

module.exports = router;

router.post("/", validateBody(Schema.login), controller.login);
