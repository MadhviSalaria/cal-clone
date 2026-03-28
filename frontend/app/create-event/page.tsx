"use client";
import { useState } from "react";
import axios from "axios";

export default function CreateEvent() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [slug, setSlug] = useState<string>("");

  const handleSubmit = async () => {
    if (!title || !duration || !slug) {
      alert("Please fill required fields ");
      return;
    }

    try {
      await axios.post("http://localhost:5000/events", {
        title,
        description,
        duration,
        slug,
      });

      alert("Event Created Successfully ");

      setTitle("");
      setDescription("");
      setDuration("");
      setSlug("");

    } catch {
      alert("Error creating event ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-gray-100 px-4">
      
      <div className="backdrop-blur-lg bg-white/80 border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md transition-all">

        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Create Event
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Set up your event details
        </p>

        {/* Title */}
        <input
          value={title}
          className="border border-gray-300 p-3 w-full mb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Event Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description */}
        <input
          value={description}
          className="border border-gray-300 p-3 w-full mb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Duration */}
        <input
          type="number"
          value={duration}
          className="border border-gray-300 p-3 w-full mb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Duration (minutes)"
          onChange={(e) => setDuration(e.target.value)}
        />

        {/* Slug */}
        <input
          value={slug}
          className="border border-gray-300 p-3 w-full mb-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Slug (e.g. meeting-call)"
          onChange={(e) => setSlug(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white py-3 rounded-xl w-full hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Create Event
        </button>

      </div>
    </div>
  );
}