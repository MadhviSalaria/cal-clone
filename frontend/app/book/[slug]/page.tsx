"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function BookingPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "";
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const BASE_URL = "https://cal-clone-pkww.onrender.com";

  const generateSlots = () => {
    const times = [];
    let hour = 10;

    while (hour < 13) {
      times.push(`${hour}:00`);
      times.push(`${hour}:30`);
      hour++;
    }
    return times;
  };

  const slots = generateSlots();

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    const hourNum = parseInt(hour);

    const ampm = hourNum >= 12 ? "PM" : "AM";
    const formattedHour = hourNum % 12 || 12;

    return `${formattedHour}:${minute} ${ampm}`;
  };

  const handleBooking = async () => {
    if (!name || !email || !date || !time) {
      alert("Please fill all fields ");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/bookings`, {
        name,
        email,
        slug,
        date: new Date(date).toISOString().split("T")[0], // ✅ FIX DATE
        time,
      });

      if (res.data.includes("Confirmed")) {
        router.push(
          `/success?name=${name}&email=${email}&date=${date}&time=${time}`
        );
      } else {
        alert(res.data);
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred while booking ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-gray-100 px-4">
      
      <div className="backdrop-blur-lg bg-white/80 border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md transition-all">

        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Book Your Slot
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          {slug}
        </p>

        {/* Name */}
        <input
          value={name}
          className="border border-gray-300 p-3 w-full mb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          value={email}
          className="border border-gray-300 p-3 w-full mb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Date */}
        <input
          type="date"
          value={date}
          className="border border-gray-300 p-3 w-full mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Time Slots */}
        <div className="mb-5">
          <p className="font-semibold mb-3 text-gray-700">
            Available Time Slots
          </p>

          <div className="grid grid-cols-3 gap-2">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => setTime(slot)}
                className={`p-2 rounded-xl text-sm border ${
                  time === slot
                    ? "bg-indigo-600 text-white"
                    : "bg-white hover:bg-indigo-50 border-gray-300"
                }`}
              >
                {formatTime(slot)}
              </button>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleBooking}
          className="bg-indigo-600 text-white py-3 rounded-xl w-full hover:bg-indigo-700"
        >
          Confirm Booking
        </button>

      </div>
    </div>
  );
}