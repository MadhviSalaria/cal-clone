const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());


// ✅ Create Event
app.post("/events", (req, res) => {
  const { title, description, duration, slug } = req.body;

  const query =
    "INSERT INTO event_types (title, description, duration, slug) VALUES (?, ?, ?, ?)";

  db.query(query, [title, description, duration, slug], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error creating event");
    }
    res.send("Event created successfully");
  });
});


// ✅ Get Events
app.get("/events", (req, res) => {
  db.query("SELECT * FROM event_types", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});


app.post("/bookings", (req, res) => {
  const { name, email, slug, date, time } = req.body;

  const query =
    "INSERT INTO bookings (name, email, slug, date, time) VALUES (?, ?, ?, ?, ?)";

  db.query(query, [name, email, slug, date, time], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error booking");
    }
    res.send("Booking Confirmed");
  });
});


app.listen(process.env.PORT || 5000, () => {
  console.log("Server running 🚀");
});