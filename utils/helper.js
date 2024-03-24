const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const fMsg = (res, status, success, message, data) => {
  res.status(status).json({
    success,
    message,
    data,
  });
};

module.exports = {
  encode: (password) => {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
  },

  comparePass: (plain, hash) => {
    return bcrypt.compareSync(plain, hash);
  },

  makeToken: (payload) =>
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "4hr" }),

  fMsg,
};
