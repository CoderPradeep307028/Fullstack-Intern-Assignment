import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("experienceId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
