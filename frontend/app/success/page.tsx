"use client";

export const dynamic = "force-dynamic";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        
        <h2 className="text-3xl font-bold text-green-600">
          Booking Confirmed 
        </h2>

        <p className="mt-4 text-gray-600">
          Your meeting has been successfully scheduled.
        </p>

      </div>
    </div>
  );
}