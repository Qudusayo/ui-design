import Preview from "./../components/layout/Preview/Preview";
import Image from "next/image";
import avatar from "../public/design5/avatar.jpg";
import eyeIcon from "../public/design5/eye_icon.svg";

export default function SignInCard() {
  return (
    <Preview>
      <section className="p-16 bg-white shadow-xl rounded-xl text-[#132B50]">
        <h2 className="my-8 text-2xl">Enter your password</h2>
        <div className="flex items-center gap-4">
          <Image src={avatar} alt="user avatar" />
          <div className="flex flex-col">
            <span className="text-sm tracking-wider">Business Account</span>
            <span className="">Sarah Bills</span>
          </div>
        </div>
        <div className="flex my-4 items-">
          <label className="text-sm ">
            Password
            <br />
            <input
              type="password"
              defaultValue="passsword"
              className="border bg-[.5rem_center] p-4 pl-10 bg-[url('../public/design5/lock_icon.svg')] bg-no-repeat border-[#132B50] rounded-lg tracking-widest mt-1"
            />
          </label>
          <Image src={eyeIcon} alt="eye icon" objectPosition={"2px 10px"} />
        </div>
        <div className="flex items-center justify-between">
          {/* toggle component code starts*/}
          <label
            for="default-toggle"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="default-toggle"
              className="sr-only peer"
            />
            <div className="w-11 h-6 border border-[#132B50] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-300 rounded-full dark:after:bg-white peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] bg-[#132B50] after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#132B50] peer-checked:after:border-white"></div>
          </label>
          {/* toggle component code ends */}
          <span>Stay signed in</span>
          <button className="p-4 text-white bg-[#132B50] rounded-lg">
            continue
          </button>
        </div>
        <br />
        <button className="mb-8 tracking-widest underline underline-offset-4">
          Reset Password
        </button>
      </section>
    </Preview>
  );
}
