const DB = require("../db/users.db");
const helper = require("../utils/helper");

const login = async (req, res, next) => {
  try {
    const findUser = await DB.findOne({ username: req.body.username }).select(
      "-__v -created_at"
    );
    if (findUser) {
      if (helper.comparePass(req.body.password, findUser.password)) {
        const user = findUser.toObject();
        delete user.password;
        user.token = helper.makeToken(user);
        helper.fMsg(res, 200, true, "Login Success", user);
      } else {
        helper.fMsg(res, 401, false, "Login Failed, Email or password wrong");
      }
    } else {
      helper.fMsg(res, 404, false, "Login Failed, User not found");
    }
  } catch (error) {
    helper.fMsg(res, 500, false, "Login Failed, Internal Server Error");
  }
};

module.exports = { login };
