import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contentSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  correctUnswer: {
    type: String,
    required: true,
  },
  unswers: {
    type: [String],
    required: true,
  },
});

const quizzSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    content: {
      type: [contentSchema],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("quizz", quizzSchema);
