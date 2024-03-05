import dotenv from "dotenv";
import app from "./app";

const port = process.env.PORT || 3001;

dotenv.config();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
