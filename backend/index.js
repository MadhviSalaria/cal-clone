const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const eventRoutes = require("./routes/events");
app.use("/events", eventRoutes);

const bookingRoutes = require("./routes/bookings");
app.use("/bookings", bookingRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000 ");
});