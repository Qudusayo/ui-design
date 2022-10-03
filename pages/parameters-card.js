import React from "react";
import Preview from "./../components/layout/Preview/Preview";
import Image from "next/image";
import settingsIcon from "/public/design4/settings_icon.svg";
import editIcon from "/public/design4/edit_icon.svg";
import deleteIcon from "/public/design4/delete_icon.svg";

export default function ParameterCard() {
  return (
    <Preview>
      <section className="rounded-[30px] shadow-md p-8 relative bg-white tracking-wide max-w-full">
        <div className="text-[#5A6793] flex gap-4 flex-wrap">
          <span className="border-b-4 pb-3 border-b-[#0D2167]">
            My Parameters
          </span>
          <span>Public</span>
          <span>Configurations</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-16 mt-8 mb-4">
          <h2 className="text-2xl text-[#0D2167] flex-grow">My Parameters</h2>
          <div className="flex flex-wrap gap-3">
            <Button src={editIcon}>Edit</Button>
            <Button src={deleteIcon}>Delete</Button>
            <button className="p-4 text-white bg-[#0D2167] rounded-lg">
              Create Parameter
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <input
            placeholder="Search"
            className="pl-10 p-4 bg-[url('../public/design4/search_icon.svg')] bg-no-repeat border-2 rounded-lg flex-grow bg-[left_center] placeholder:text-[#5A6793] max-w-full"
          />
          <span className="text-xl text-[#0D2167]"> &#10094; 1 &#10095;</span>
          <Image src={settingsIcon} alt="settings icon" />
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="px-4 py-2 border rounded-lg border-[#0D2167] text-[#0D2167]">
            contains:auth0 <span className="text-2xl">&times;</span>
          </button>
          <button className="px-4 py-2 border border-[#C6CCE0] rounded-lg text-[#0D2167]">
            Clear filters
          </button>
        </div>
        <div className="absolute hidden lg:block bg-[#0D2167] rounded-[30px] w-96 h-40 -z-[1] -left-20 -bottom-14"></div>
      </section>
    </Preview>
  );
}
function Button({ src, children }) {
  return (
    <button className="inline-flex items-center border-2 rounded-lg px-4 py-2 text-[#0D2167] gap-1">
      <Image src={src} alt="icon" width={20} height={20} />
      {children}
    </button>
  );
}
