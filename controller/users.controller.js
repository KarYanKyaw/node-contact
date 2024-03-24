const DB = require("../db/contacts.db");
const helper = require("../utils/helper");

const getAll = async (req, res, next) => {
  try {
    let users = await DB.find();
    helper.fMsg(res, 200, true, "Got All Users", users);
  } catch (error) {
    helper.fMsg(res, 500, false, "Error Getting New User", users);
  }
};

const getUser = async (req, res, next) => {
  try {
    let user = await DB.findById(req.params.id);
    helper.fMsg(res, 200, true, "Got user", user);
  } catch (error) {
    helper.fMsg(res, 500, false, "Error Getting New User");
  }
};

const addUser = async (req, res, next) => {
  try {
    const newUser = new DB(req.body);
    const newData = await newUser.save();
    helper.fMsg(res, 201, true, "Created New User", newData);
  } catch (e) {
    helper.fMsg(res, 400, false, "Error Creating New User", "");
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateUser = await DB.findByIdAndUpdate(id, req.body);

    if (!updateUser) {
      return helper.fMsg(res, 404, false, "User not found", "");
    }
    helper.fMsg(res, 200, true, "User updated", updateUser);
  } catch (error) {
    helper.fMsg(res, 500, false, "Error updating user", "");
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteUser = await DB.findByIdAndDelete(id);

    if (!deleteUser) {
      return helper.fMsg(res, 404, false, "User not found", "");
    }
    helper.fMsg(res, 204, true, "User deleted", deleteUser);
  } catch (error) {
    helper.fMsg(res, 500, false, "Error deleting user", "");
  }
};

module.exports = { getAll, addUser, updateUser, deleteUser, getUser };
