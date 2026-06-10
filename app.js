import express from "express";
import { deleteRecord, getAllUsers, updateRecord } from "./controller/user.js";
import UserRouter from "./routes/userRoutes.js";
const app = express();

app.use(express.json());
app.use('/user', UserRouter);
app.use('/user', getAllUsers)
app.use('/user/:id', deleteRecord)
app.use('/user/id', updateRecord)

export default app