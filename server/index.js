const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UsersModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({
            message: "success",
            userDetails: { name: user.name, email: user.email },
          });
        } else {
          res.json({ message: "password incorrect" });
        }
      } else {
        res.json({ message: "user not found" });
      }
    })
    .catch((err) => res.json({ message: "error", error: err }));
});

app.get("/login/:name", (req, res) => {
  const { name } = req.params;
  UsersModel.findOne({ name })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.json({ message: "user not found" });
      }
    })
    .catch((err) => res.json({ message: "error", error: err }));
});

app.post("/register", (req, res) => {
  UsersModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
