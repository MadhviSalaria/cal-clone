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
    try {
      await axios.post("https://cal-clone.onrender.com/events", {
        title,
        description,
        duration,
        slug,
      });

      alert("Event Created Successfully ");

      router.push("/dashboard");

    } catch (err) {
      alert("Error creating event ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow rounded w-96">

        <h2 className="text-xl font-bold mb-4">Create Event</h2>

        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input placeholder="Duration" onChange={(e) => setDuration(e.target.value)} />
        <input placeholder="Slug" onChange={(e) => setSlug(e.target.value)} />

        <button onClick={handleSubmit}>Create</button>

      </div>
    </div>
  );
}