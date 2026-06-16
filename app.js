import express from "express";
import { deleteRecord, getAllUsers, updateRecord } from "./controller/user.js";
import UserRouter from "./routes/userRoutes.js";
import morgan from "morgan";
const app = express();

app.use(morgan('dev'));
app.set('views', './views')
app.set('view engine','ejs')
app.use(express.json());
app.use('/user', UserRouter);
app.use('/user', getAllUsers)
app.use('/user/:id', deleteRecord)
app.use('/user/id', updateRecord)

export default app