import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";


import experienceRoutes from "./routes/experienceRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import promoRoutes from "./routes/promoRoutes.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);


app.get("/", (req, res) => {
  res.send("✅ Server is running successfully!");
});


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas Connected Successfully"))
  .catch((err) => console.error(" MongoDB Connection Error:", err.message));

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
