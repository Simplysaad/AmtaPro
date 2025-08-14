import express, { urlencoded } from "express";
import dotenv from "dotenv";
import Session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import cors from "cors";

import connectDB from "./Config/db.js";
import errorHandler from "./Middlewares/error.middleware.js";

import athleteRoutes from "./Routes/athlete.routes.js";
import authRoutes from "./Routes/auth.routes.js";
import scoutRoutes from "./Routes/scout.route.js";

dotenv.config();
const { PORT, MONGO_URI, SECRET_KEY } = process.env;

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

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
app.use(urlencoded({ extended: true }));

app.use(express.static("./Docs/"));

app.use(errorHandler);


app.listen(PORT, () => {
  connectDB();
  console.log(`app listening on port ${PORT}`);
});

app.use("/auth", authRoutes);
app.use("/athletes", athleteRoutes);
app.use("/scout", scoutRoutes);
