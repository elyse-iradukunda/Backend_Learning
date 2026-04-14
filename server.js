
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();

const Port = process.env.PORT;


const mongoose = require("mongoose");


const connection = mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Connected"))

app.use(cors());


app.get("/",(req,res)=>{

    res.json(

        [
            {name:"iran",phone: "078399383"},
            {name:"Son",phone: "074935863"},
            {name:"vite",phone: "07834943563"}

    ]);
})

app.listen(Port,()=>{
    console.log("The server is running on Port"+ Port );
})