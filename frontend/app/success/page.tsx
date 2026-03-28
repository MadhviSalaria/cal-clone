"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const params = useSearchParams();

  const name = params.get("name") || "";
  const email = params.get("email") || "";
  const date = params.get("date") || "";
  const time = params.get("time") || "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Booking Confirmed ✅
        </h2>

        <p className="text-gray-700 mb-2">
          <strong>Name:</strong> {name}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {email}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Date:</strong> {date}
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Time:</strong> {time}
        </p>

        <a
          href="/dashboard"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go to Dashboard
        </a>

      </div>
    </div>
  );
}