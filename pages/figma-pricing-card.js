import Preview from "../components/layout/Preview/Preview";

export default function PricingCard() {
  return (
    <Preview>
      <PhotoshopCard />
      <div className="absolute z-0 rounded-lg w-72 bg-shadow h-96 rotate-7"></div>
    </Preview>
  );
}

function PhotoshopCard() {
  return (
    <div className="z-10 rounded-lg shadow-lg w-72">
      <div className="flex justify-between p-6 rounded-t-lg bg-primary">
        <img src="photoshop-logo.svg" alt="photoshop-logo" className="w-16" />
        <span className="self-end text-sm text-white">Photoshop</span>
      </div>
      <div className="p-8 bg-white rounded-b-lg">
        <h2>NOK 200.99/mo</h2>
        <p className="my-2 text-sm font-light">
          Create beautiful graphics, photos, and art on desktop and iPad. Comes
          with Adobe Fresco for drawing and painting.
        </p>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-light underline text-link"
        >
          Plan & pricing details
        </a>
        <button className="block w-full py-2 mt-6 text-sm text-white rounded-full bg-primary ">
          Buy Now
        </button>
      </div>
    </div>
  );
}
