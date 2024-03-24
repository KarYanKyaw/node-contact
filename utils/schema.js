const Joi = require("joi");

module.exports = {
  Schema: {
    register: Joi.object({
      username: Joi.string().min(3).max(30).required(),

      email: Joi.string().email().required(),

      phone: Joi.string().required(),

      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    }),
    login: Joi.object({
      username: Joi.string().min(3).max(30).required(),

      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    }),
  },
};
