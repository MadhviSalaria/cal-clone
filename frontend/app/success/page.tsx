"use client";

export const dynamic = "force-dynamic";

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
          Booking Confirmed 
        </h2>

        <div className="text-left mt-4 space-y-2">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
        </div>

      </div>
    </div>
  );
}