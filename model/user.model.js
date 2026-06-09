import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const  users = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    userName: { type: String },
    Location: { type: String },
   

}, { timestamps: true })


const User = mongoose.model("User", users)

export default User