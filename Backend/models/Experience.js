import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  slots: [String], 
  image: String
});

export default mongoose.model("Experience", experienceSchema);

