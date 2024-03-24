const helper = require("../utils/helper");
module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        res.status(400).json({
          msg: result.error.details[0].message,
        });
      } else {
        next();
      }
    };
  },
  verifyToken: (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      helper.fMsg(res, 403, false, "You are not authorized");
    }
  },
};
