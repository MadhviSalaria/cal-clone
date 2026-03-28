const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { name, email, slug, date, time } = req.body;

  const checkSql = "SELECT * FROM bookings WHERE slug=? AND date=? AND time=?";

  db.query(checkSql, [slug, date, time], (err, result) => {
    if (err) return res.send(err);

    if (result.length > 0) {
      return res.send("Slot already booked ");
    }

    const insertSql =
      "INSERT INTO bookings (name, email, slug, date, time) VALUES (?, ?, ?, ?, ?)";

    db.query(insertSql, [name, email, slug, date, time], (err) => {
      if (err) return res.send(err);
      res.send("Booking Confirmed ");
    });
  });
});

module.exports = router;