import express from "express";
import {
  createQuizz,
  getAllQuizzes,
  getSingleQuizz,
  deleteSingleQuizz,
  updateSingleQuizz,
} from "../controllers/quizz.controller.js";
const router = express.Router();

// get all quizzes
router.get("/", getAllQuizzes);

// get single quizzes
router.get("/:id", getSingleQuizz);

// add quizz
router.post("/", createQuizz);

// delete single quizzes
router.delete("/:id", deleteSingleQuizz);

// update single quizzes
router.patch("/:id", updateSingleQuizz);

export default router;
