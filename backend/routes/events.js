const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { title, description, duration, slug } = req.body;

  const sql = "INSERT INTO event_types (title, description, duration, slug) VALUES (?, ?, ?, ?)";

  db.query(sql, [title, description, duration, slug], (err) => {
    if (err) return res.send(err);
    res.send("Event Saved Successfully");
  });
});

router.get("/", (req, res) => {
  const sql = "SELECT * FROM event_types";

  db.query(sql, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

module.exports = router;