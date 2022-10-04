import Preview from "./../components/layout/Preview/Preview";
import Image from "next/image";
import mailIcon from "../public/design6/mail_icon.svg";
import alarmIcon from "../public/design6/alarm_icon.svg";
import twitterIcon from "../public/design6/twitter_icon.svg";
import facebookIcon from "../public/design6/fb_icon.svg";

export default function NotificationCard() {
  return (
    <Preview>
      <section className="relative">
        <div className="absolute top-10 -left-14 h-52 w-96 bg-[#E9EBFF] rounded-[50px] -z-[1]"></div>
        <div className="flex justify-end mb-4">
          <Image src={alarmIcon} alt="an alarm icon" />
        </div>
        <div className="p-8 bg-white shadow-lg rounded-xl">
          <h3 className="text-xl">You have 1 new message</h3>
          <div className="flex gap-2 mt-2">
            <Image src={mailIcon} alt="a mail icon" />
            <div className="flex flex-col items-center gap-2">
              <p className="mr-auto">Feb 22</p>
              <span>
                If you like what we do, please tell your friends and share.
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-4 my-4">
            <Button src={twitterIcon} twClass="text-[#158ABB] border-[#158ABB]">
              Twitter
            </Button>
            <Button
              src={facebookIcon}
              twClass="text-[#205195] border-[#205195]"
            >
              Facebook
            </Button>
          </div>
        </div>
      </section>
    </Preview>
  );
}
function Button({ src, children, twClass = `` }) {
  const classname = `inline-flex items-center gap-4 px-2 py-1 border rounded-full ${twClass}`;
  return (
    <button className={classname}>
      <Image src={src} alt="icon" width={25} height={25} />
      {children}
    </button>
  );
}
