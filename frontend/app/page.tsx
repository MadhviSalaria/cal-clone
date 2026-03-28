import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        
        <h1 className="text-3xl font-bold mb-4">
          My Scheduling App
        </h1>

        <p className="text-gray-600 mb-6">
          Create and manage your events easily
        </p>

        <Link href="/create-event">
          <button className="bg-black text-white px-6 py-2 rounded-lg">
            Create Event
          </button>
        </Link>

      </div>
    </div>
  );
}