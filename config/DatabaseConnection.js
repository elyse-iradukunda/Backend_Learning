import mongoose, { connect } from "mongoose";
const db = "mongodb+srv://nodeJsLearning:Irael.com1@nodejslearning.hfqbcvz.mongodb.net/testdb?retryWrites=true&w=majority";
export const dbConnection = async () => {
    
    try {
      const connection= await  mongoose.connect(db);
        if (connection) {
console.log("Connection passed")        }
    } catch (error) {
        console.log("The error is being caused by", error);
    }
}