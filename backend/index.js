const env = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const todos = require("./routes/todos");
const profile = require("./routes/profile");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/health", (req, res) => {
  res.send("ok");
});

app.use("/todos", todos);
app.use("/profile", profile);
const connectDB = async () => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URL);
    }catch(e){
        console.log(e);
    }
}
connectDB();
app.listen(process.env.PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(process.env.PORT);
  console.log(`listening on port ${process.env.PORT}`);
});
