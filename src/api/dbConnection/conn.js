const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginRegisterDB")
  .then(() => {
    console.log("Conenction is successful");
  })
  .catch((e) => {
    console.log("No Connection");
  });
