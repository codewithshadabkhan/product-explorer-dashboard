import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <AlertTriangle className="h-8 w-8 text-gray-500" />
      </div>

      <h1 className="text-2xl font-bold text-gray-800">Page not found</h1>

      <p className="mt-2 max-w-md text-sm text-gray-500">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-md bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
      >
        Go back home
      </Link>
    </div>
  );
}
