"use client";

export default function SuccessPage() {
  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  const name = params?.get("name") || "";
  const email = params?.get("email") || "";
  const date = params?.get("date") || "";
  const time = params?.get("time") || "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Booking Confirmed 
        </h2>

        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>

      </div>
    </div>
  );
}