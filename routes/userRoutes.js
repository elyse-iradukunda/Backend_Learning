import express from "express";

import { deleteRecord, newUser,updateRecord } from "../controller/user.js";

const UserRouter = express.Router();

UserRouter.post('/', newUser);

UserRouter.delete('/:id', deleteRecord)

UserRouter.put('/:id',updateRecord)

export default UserRouter