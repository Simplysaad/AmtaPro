import express, { urlencoded } from "express";
import dotenv from "dotenv";
import Session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";

import connectDB from "./Config/db.js";
import mainRoutes from "./Routes/main.routes.js";
import errorHandler from "./Middlewares/error.middleware.js";
import authRoutes from "./Routes/auth.routes.js";

dotenv.config();
const { PORT, MONGO_URI, SECRET_KEY } = process.env;

const app = express();

app.use(morgan("dev"));

app.use(
  Session({
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
    }),
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookies: {
      maxAge: 3600000,
      secure: false,
    },
  })
);
app.use(express.json());

app.use(express.static("./Docs/"));

app.use(errorHandler);

app.use("/", mainRoutes);
app.use("/", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`app listening on port ${PORT}`);
});
