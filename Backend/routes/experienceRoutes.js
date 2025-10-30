import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get("/", async (req, res) => {
  const experiences = await Experience.find();
  res.json(experiences);
});


router.get("/:id", async (req, res) => {
  const exp = await Experience.findById(req.params.id);
  res.json(exp);
});

export default router;
