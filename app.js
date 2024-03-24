require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.listen(3000, console.log("App Started"));

(async () => {
  mongoose.connect(process.env.MONGO_URL);
})();

mongoose.connection.on("open", () => {
  console.log("Database connected!");
});

const userRouter = require("./routes/users.routes");
const loginRouter = require("./routes/login.routes");
const registerRouter = require("./routes/register.routes");

app.use("/users", userRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

// invalid route
app.use("*", (req, res) =>
  res.status(404).json({
    msg: "route not found",
  })
);
