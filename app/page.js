import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Next.js MongoDB Auth
        </h1>

        <div className="flex gap-4 justify-center mt-6">
          <Link
            href="/signup"
            className="bg-black text-white px-5 py-3 rounded"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="border px-5 py-3 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}