import app from "./app.js";
import { dbConnection } from "./config/DatabaseConnection.js";

dbConnection();
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});