const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

require("./dbConnection/conn");
const User = require("./models/userSchema");

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email: email }, (err, user) => {
    if (user) {
        if(password === user.password){
            res.send({message: "Login successfull", user:user});
        }
        else{
            res.send({message: "Password didn't match!"});
        }
    } 
    else {
     res.send({message: "User Not Registered!"});
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const user = User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({message: "User Already Registered"});
    } 
    else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });

      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Registered SuccessFully, Login Now!" });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is live at port no. ${port}`);
});
