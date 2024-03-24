const router = require("express").Router();

module.exports = router;
const { verifyToken } = require("../utils/validator");
const controller = require("../controller/users.controller");

router.get("/", verifyToken, controller.getAll);
router.post("/", verifyToken, controller.addUser);

router
  .route("/:id")
  .get(controller.getUser)
  .patch(controller.updateUser)
  .delete(controller.deleteUser);
