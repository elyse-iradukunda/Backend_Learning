import { users } from "../users";

export const  createNewUser  = async (req, res) => {
     
    try {
        const user = await users.create(req.body);
        
        res.status(201).json(user);
    } catch (error) {
        
        res.status(500).json({message:error.message})
    }

}