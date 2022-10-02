import Link from "next/link";

export default function Preview({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Link href="/">
        <span className="fixed z-10 p-2 text-blue-500 rounded-lg shadow-lg cursor-pointer backdrop-blur-sm top-5 left-12">
          Back to Home
        </span>
      </Link>
      {children}
    </div>
  );
}
