"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateEvent() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = async () => {
    if (!title || !description || !duration || !slug) {
      alert("Please fill all fields ");
      return;
    }

    try {
      await axios.post("https://cal-clone-pkww.onrender.com/events", {
        title,
        description,
        duration,
        slug,
      });

      router.push(`/book/${slug}`);

    } catch (err) {
      console.error(err);
      alert("Error creating event ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Event
        </h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Description */}
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Duration */}
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Slug */}
        <input
          type="text"
          placeholder="Slug (unique URL)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white py-3 w-full rounded-lg hover:bg-indigo-700 transition"
        >
          Create & Book
        </button>

      </div>
    </div>
  );
}