import express from "express";
const router = express.Router();

const promoCodes = {
  SAVE10: 10,
  FLAT100: 100
};

router.post("/validate", (req, res) => {
  const { code } = req.body;
  const discount = promoCodes[code];
  if (discount) res.json({ valid: true, discount });
  else res.json({ valid: false });
});

export default router;
