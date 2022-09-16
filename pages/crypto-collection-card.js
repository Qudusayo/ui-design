import Preview from "../components/layout/Preview/Preview";
import Image from "next/image";

export default function PricingCard() {
  return (
    <Preview>
      <CryptoCollectionCard />
    </Preview>
  );
}

function CryptoCollectionCard() {
  return (
    <div className="w-64 bg-[rgb(0_142_134)] rounded-2xl shadow-lg z-10">
      <div className="m-2">
        <Image
          src="/MetaAngels.png"
          alt="meta-angels-banner"
          width="250px"
          height="250px"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="rounded-b-lg p-4">
        <h2 className="text-white">Meta Angels</h2>
        <p className="font-light text-sm my-2 text-white-60">
          A collection of 10,000 unique Meta Angels, generated from more than
          400 hand drawn elements.
        </p>
        <div className="flex mt-10">
          <div className="pr-5">
            <span className="text-white-60 block text-sm">Volume</span>
            <span className="text-white">3K ETH</span>
          </div>
          <div className="pl-5 border-l border-x-gray-900">
            <span className="text-white-60 block text-sm">Floor</span>
            <span className="text-white">0.044 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
}
