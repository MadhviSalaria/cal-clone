"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface EventType {
  id: number;
  title: string;
  description: string;
  duration: number;
  slug: string;
}

export default function Dashboard() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching events ");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-gray-100 px-4 py-10">
      
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          My Events
        </h1>

        {/* Loading */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : events.length === 0 ? (
          <p className="text-center text-gray-500">
            No events found
          </p>
        ) : (
          <div className="space-y-5">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-indigo-300 transition-all duration-300"
              >
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900">
                  {event.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mt-1">
                  {event.description}
                </p>

                {/* Duration */}
                <p className="text-sm text-gray-500 mt-2">
                  Duration: {event.duration} mins
                </p>

                {/* Button */}
                <a
                  href={`/book/${event.slug}`}
                  className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm shadow hover:shadow-md"
                >
                  Book Now →
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}