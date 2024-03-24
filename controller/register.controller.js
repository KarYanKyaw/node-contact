const DB = require("../db/users.db");
const helper = require("../utils/helper");

const register = async (req, res, next) => {
  try {

    const isExisted = await DB.findOne({ username: req.body.username });

    if (isExisted) {
      helper.fMsg(res, 400, false, "Your Account is already existed!");
      return;
    }

    req.body.password = helper.encode(req.body.password);

    const user = new DB(req.body);

    const result = await user.save();

    helper.fMsg(res, 201, true, "Your Account is created!", result);
  } catch (error) {
    console.log(error);
    helper.fMsg(res, 400, false, "Error Creating Account!");
  }
};

module.exports = {
  register,
};
