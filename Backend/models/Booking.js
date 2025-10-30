import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  experienceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experience",
    required: true,
  },
  userName: {
    type: String,
    required: false,
  },
  userEmail: {
    type: String,
    required: false,
  },
   promoCode: {
    type: String,
    required: false,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;


