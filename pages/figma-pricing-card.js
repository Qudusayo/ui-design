import Preview from "../components/layout/Preview/Preview";

export default function PricingCard() {
  return (
    <Preview>
      <PhotoshopCard />
      <div className=" w-72 bg-shadow h-96 absolute rounded-lg z-0 rotate-7"></div>
    </Preview>
  );
}

function PhotoshopCard() {
  return (
    <div className="w-72 rounded-lg shadow-lg z-10">
      <div className="bg-primary flex justify-between rounded-t-lg p-6">
        <img src="photoshop-logo.svg" alt="photoshop-logo" className="w-16" />
        <span className="text-white self-end text-sm">Photoshop</span>
      </div>
      <div className="bg-white rounded-b-lg p-8">
        <h2>NOK 200.99/mo</h2>
        <p className="font-light text-sm my-2">
          Create beautiful graphics, photos, and art on desktop and iPad. Comes
          with Adobe Fresco for drawing and painting.
        </p>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="text-link text-xs font-light underline"
        >
          Plan & pricing details
        </a>
        <button className="bg-primary text-white block w-full py-2 rounded-full mt-6 text-sm ">
          Buy Now
        </button>
      </div>
    </div>
  );
}
