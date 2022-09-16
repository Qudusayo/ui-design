import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-body">
      <h2 className="text-center mt-5 text-4xl">UI DESIGNS</h2>
      <div className="w-11/12 mt-5 m-auto ">
        <ul class="list-disc">
          <li className="text-blue-500 underline">
            <Link href="/figma-pricing-card">Photoshop Pricing Card down</Link>
          </li>
          <li className="text-blue-500 underline">
            <Link href="/crypto-collection-card">Crypto Collection Card</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
