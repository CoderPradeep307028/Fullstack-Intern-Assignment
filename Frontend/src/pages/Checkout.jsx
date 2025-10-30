import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", promo: "" });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/api/bookings", {
      experienceId: state._id,
      userName: form.name,
      userEmail: form.email,
      promoCode: form.promo,
    });
    navigate("/result", { state: { success: true } });
  } catch {
    navigate("/result", { state: { success: false } });
  }
};


  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Checkout for {state?.name}</h2>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Promo Code"
        className="border p-2 w-full rounded"
        onChange={(e) => setForm({ ...form, promo: e.target.value })}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
    </form>
  );
}
