import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const  users = new Schema({
    useId: {
        type: Number,
        required: true,
    },
    userName: { type: String },
    Location: { type: String },
   

}, { timestamps: true })
