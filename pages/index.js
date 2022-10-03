import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-body">
      <h2 className="mt-5 text-4xl text-center">UI DESIGNS</h2>
      <div className="w-11/12 m-auto mt-5 ">
        <ul className="list-disc">
          <ListLink href="/figma-pricing-card">
            Photoshop Pricing Card down
          </ListLink>
          <ListLink href="/crypto-collection-card">
            Crypto Collection Card
          </ListLink>
          <ListLink href="/collections-list">Popular Collections Card</ListLink>
          <ListLink href="/parameters-card">Parameters Card</ListLink>
        </ul>
      </div>
    </div>
  );
}
function ListLink({ children, ...restProps }) {
  return (
    <li className="text-blue-500 underline">
      <Link {...restProps}>{children}</Link>
    </li>
  );
}
