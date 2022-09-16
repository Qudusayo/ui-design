import Link from "next/link";

export default function Preview({ children }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Link href="/">
        <span className="fixed top-5 left-12 text-blue-500 cursor-pointer">Back to Home</span>
      </Link>
      {children}
    </div>
  );
}
