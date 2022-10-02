import Preview from "../components/layout/Preview/Preview";
import Image from "next/image";
import people from "../public/design3/people.jpg";
import people1 from "../public/design3/people1.jpg";
import people2 from "../public/design3/people2.jpg";
import people3 from "../public/design3/people3.jpg";
import nature from "../public/design3/nature.jpg";
import nature1 from "../public/design3/nature1.jpg";
import nature2 from "../public/design3/nature2.jpg";
import nature3 from "../public/design3/nature3.jpg";
import history from "../public/design3/history.jpg";
import history1 from "../public/design3/history1.jpg";
import history2 from "../public/design3/history2.jpg";
import history3 from "../public/design3/history3.jpg";
import imgIcon from "../public/design3/image_icon.png";

export default function CollectionsList() {
  const TAGS = [`Profile`, `New york`, `Relaxing`, `Person`, `Fashion`];
  const IMAGES = [
    {
      mainImage: people,
      childImage: [people1, people2, people3],
      alt: `woman staring at screen`,
      label: `People`,
      count: 144,
    },
    {
      mainImage: nature,
      childImage: [nature1, nature2, nature3],
      alt: `an abstract mountain like figure`,
      label: `Nature`,
      count: `7k`,
    },
    {
      mainImage: history,
      childImage: [history1, history2, history3],
      alt: `a random historical place`,
      label: `History`,
      count: 431,
    },
  ];
  return (
    <Preview>
      <section>
        <div className="hidden lg:block rounded-[50%] w-52 h-52 bg-[#e5e7f0] relative -z-[1] translate-x-[700px] translate-y-32"></div>
        <section className="rounded-[30px] shadow-xl p-10 bg-[#EFF0F1]">
          <h3 className="text-2xl">Popular Collections Card</h3>
          <div className="flex flex-wrap gap-4 my-4">
            {TAGS.map((el) => (
              <span
                key={el}
                className="p-2 text-sm text-black bg-white rounded-lg"
              >
                {el}
              </span>
            ))}
          </div>
          <main className="flex flex-wrap items-center justify-center gap-8">
            {IMAGES.map((imgObject) => (
              <section
                key={imgObject.label}
                className="bg-white py-3 px-4 rounded-[30px] w-[300px]"
              >
                <Image alt={imgObject.alt} src={imgObject.mainImage} />
                <div className="flex gap-4 my-2">
                  {imgObject.childImage.map((img, idx) => (
                    <Image key={idx} alt={imgObject.alt} src={img} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h4>{imgObject.label}</h4>
                  <p className="flex items-start gap-1">
                    <Image
                      alt="image icon"
                      src={imgIcon}
                      width={20}
                      height={20}
                    />{" "}
                    <span>{imgObject.count}</span>
                  </p>
                </div>
              </section>
            ))}
          </main>
        </section>
        <div className="hidden lg:block rounded-[50%] w-52 h-52 bg-[#e5e7f0] relative -z-[1] -translate-y-32 translate-x-32"></div>
      </section>
    </Preview>
  );
}
