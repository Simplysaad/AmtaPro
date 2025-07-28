import {mongoose} from "mongoose";

export default async function connectDB() {
  try {
    mongoose.set("strictQuery", false);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    if (!conn) throw new Error(`Error connecting to ${conn.connection.host}`);
    console.log(`connected to ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }
}