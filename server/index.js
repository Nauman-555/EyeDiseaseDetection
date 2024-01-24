const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({ success: true, user }); // Send a JSON response indicating success
        } else {
          res.json({ success: false, message: "The password is incorrect" });
        }
      } else {
        res.json({ success: false, message: "No record found" });
      }
    })
    .catch((err) => res.json({ success: false, message: err.message }));
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Check if the email already exists
  EmployeeModel.findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        // Email already exists, send a response indicating user exists
        res.json({
          success: false,
          message: "User already exists with this email",
        });
      } else {
        // Email doesn't exist, proceed with registration
        EmployeeModel.create({ name, email, password })
          .then((newlyRegisteredUser) =>
            res.json({ user: newlyRegisteredUser, success: true })
          )
          .catch((err) => res.json({ success: false, message: err.message }));
      }
    })
    .catch((err) => res.json({ success: false, message: err.message }));
});

app.listen(3001, () => {
  console.log("Server is running");
});
