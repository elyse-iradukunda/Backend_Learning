import mongoose from "mongoose";
import express from "express"

const db = "mongodb+srv://nodeJsLearning:Irael.com1@nodejslearning.hfqbcvz.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose.connect(db)
  .then(() => {
    console.log("MongoDB connection SUCCESS ✅");
  })
  .catch((err) => {
    console.log("MongoDB connection FAILED ❌");
    console.log(err.message);
  }); 