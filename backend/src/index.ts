// import the package
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";
import myRestaurantRoute from "./routes/myRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";

import { v2 as cloudinary } from "cloudinary";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to database!");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// create an express server
const app = express();

// json api middileware
app.use(express.json());

app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

// /api/my/user
app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);

app.listen(8888, () => {
  console.log("server started on localhost:8888");
});
