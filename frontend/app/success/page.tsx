"use client";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const params = useSearchParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 text-center">
        
        <h2 className="text-2xl font-bold mb-4">
          Booking Confirmed 
        </h2>

        <p className="mb-2">Name: {params.get("name")}</p>
        <p className="mb-2">Email: {params.get("email")}</p>
        <p className="mb-2">Date: {params.get("date")}</p>
        <p className="mb-2">Time: {params.get("time")}</p>

      </div>
    </div>
  );
}