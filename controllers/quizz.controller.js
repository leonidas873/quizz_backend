import Quizz from "../models/quizz.model.js";
import mongoose from "mongoose";

// get all quizzes
const getAllQuizzes = async (req, res) => {
  const quizzes = await Quizz.find({}).sort({ createdAt: -1 });

  res.status(200).json(quizzes);
};

// get single quizz
const getSingleQuizz = async (req, res) => {
  const { id } = req.params;

  const quizz = await Quizz.findById(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such quizz" });
  }

  if (!quizz) {
    return res.status(404).json({ error: "No such quizz" });
  }

  res.status(200).json(quizz);
};

// createt new quizz
const createQuizz = async (req, res) => {
  try {
    const quizz = await Quizz.create(req.body);
    res.status(200).json(quizz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete single quizz
const deleteSingleQuizz = async (req, res) => {
  const { id } = req.params;

  const quizz = await Quizz.findByIdAndDelete(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such quizz" });
  }

  if (!quizz) {
    return res.status(404).json({ error: "No such quizz" });
  }

  res.status(200).json(quizz);
};

// update single quizz
const updateSingleQuizz = async (req, res) => {
  const { id } = req.params;

  const quizz = await Quizz.findByIdAndUpdate({ _id: id }, { ...req.body });

  const updatedQuizz = await Quizz.findById(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such quizz" });
  }

  if (!quizz) {
    return res.status(404).json({ error: "No such quizz" });
  }

  res.status(200).json(updatedQuizz);
};

export {
  createQuizz,
  getAllQuizzes,
  getSingleQuizz,
  deleteSingleQuizz,
  updateSingleQuizz,
};
