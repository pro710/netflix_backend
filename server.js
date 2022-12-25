const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv=require("dotenv");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const url = process.env.MONGODB_URI || "mongodb+srv://user:12345@cluster0.y7gxcj4.mongodb.net/?retryWrites=true&w=majority"
//mongodb+srv://user:12345@cluster0.y7gxcj4.mongodb.net/?retryWrites=true&w=majority
const PORT = process.env.PORT || 5000;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
