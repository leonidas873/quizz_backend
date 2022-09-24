import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import quizzRouter from './routes/quizzes.router.js';


const app = express();
dotenv.config();
app.use(cors());

app.use(express.json())


app.use("/quizzes", quizzRouter);

mongoose
  .connect(process.env.MONGODB_PSW)
  .then(() => {
    // listen for requiests
    console.log("successfully connected");
    app.listen(process.env.PORT, () => {
      console.log("listening on port 8000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
