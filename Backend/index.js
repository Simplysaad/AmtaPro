import express from "express"
import connectDB from "./Config/db.js";
import dotenv from "dotenv"

import mainRoutes from "./Routes/main.routes.js";
import errorHandler from "./Middlewares/error.middleware.js";

dotenv.config();

const app = express();
const { PORT } = process.env;

app.listen(PORT, () => {
  connectDB();
  console.log(`app listening on port ${PORT}`);
});

app.use(errorHandler);

app.use("/", mainRoutes)