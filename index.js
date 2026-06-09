import mongoose from "mongoose";
import express from "express";
import UserRouter from "./routes/userRoutes.js";
import { deleteRecord, getAllUsers, updateRecord } from "./controller/user.controler.js";

const db = "mongodb+srv://nodeJsLearning:Irael.com1@nodejslearning.hfqbcvz.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose.connect(db)
  .then(() => {
    console.log("MongoDB connection SUCCESS ✅");
  })
  .catch((err) => {
    console.log("MongoDB connection FAILED ❌");
    console.log(err.message);
  });
const PORT = 5000;
const app = express();

app.use(express.json());
app.use('/user', UserRouter);
app.use('/user', getAllUsers)
app.use('/user/:id', deleteRecord)
app.use('/user/id',updateRecord)

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});