const router = require("express").Router();
const controller = require("../controller/register.controller");

const { Schema } = require("../utils/schema");
const { validateBody } = require("../utils/validator");

module.exports = router;

router.post("/", validateBody(Schema.register), controller.register);
