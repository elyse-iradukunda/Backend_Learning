import express from "express";
import User from "../Models/user.js";

const router = express.Router();


router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});


router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});


router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

export default router;