import express from "express";
import {
  createQuizz,
  getAllQuizzes,
  getSingleQuizz,
} from "../controllers/quizz.controller.js";
const router = express.Router();

// get all quizzes

router.get("/", getAllQuizzes);

// get single quizzes
router.get("/:id",getSingleQuizz)

// add quizz

router.post("/", createQuizz);

export default router;
