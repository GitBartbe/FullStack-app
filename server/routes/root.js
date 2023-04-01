const { date } = require("date-fns/locale");
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  return res.status(200).json({ message: "This is test message" });
});

router.get("/about", (req, res) => {
  return res.status(200).json({ message: "This is message from About" });
});

router.post("/sign-in", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Request Succesfull" });
});

module.exports = router;
