import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    userName: req.body.userName
  };

  users.push(newUser);

  res.json(newUser);
});

app.listen(PORT, () => {
  console.log("Hello this the app is running on Port", PORT);
});