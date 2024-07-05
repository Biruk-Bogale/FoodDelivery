// import the package
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

// create an express server
const app = express();

// json api middileware
app.use(express.json());

app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
