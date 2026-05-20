import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white text-center px-6">
      <h1 className="text-6xl font-bold text-[#194a9a] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="text-[#194a9a] hover:underline font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}
