import User from "../model/user.model.js";

export const newUser = async (req, res) => {
  const { userId, userName, Location } = req.body;

  try {
    const user = await User.create({ userId, userName, Location });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAllUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(201).json(users)
    } catch (error) {
        
        res.status(500).json({message: error.message})
    }
}

export const deleteRecord = async (req, res) => {
    try {
        
        const del = await User.findByIdAndDelete(req.params.id);

        if (!del) {
          return  res.status(404).json({ message: "user not found" })
        }

        res.status(200).json(del)
    } catch (error) {
            res.status(500).json({message: error.message})
    }
}

export const updateRecord = async (req,res) => {
  try {
        const upd = User.findByIdAndUpdate(req.params.id,{new: true});

    if (!upd) {
        return res.status(404).json({message:"It is not found"})
    }
    res.status(200).json(upd)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
}