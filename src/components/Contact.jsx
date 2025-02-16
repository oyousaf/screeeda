import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

import { FaDiscord, FaInstagram, FaSteam, FaTwitch, FaXbox } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const socialLinks = [
  {
    href: "https://discord.com/invite/yUwFBJ6AZQ",
    icon: <FaDiscord size={40} />,
    colorClass: "text-blue-400 hover:text-blue-500",
  },
  {
    href: "https://instagram.com/screeeda",
    icon: <FaInstagram size={40} />,
    colorClass: "text-orange-400 hover:text-orange-500",
  },
  {
    href: "https://steamcommunity.com/id/screeeda",
    icon: <FaSteam size={40} />,
    colorClass: "text-blue-950 hover:text-blue-900",
  },
  {
    href: "https://twitch.tv/screeeda",
    icon: <FaTwitch size={40} />,
    colorClass: "text-violet-400 hover:text-violet-500",
  },
  {
    href: "https://x.com/screeeda",
    icon: <FaXTwitter size={40} />,
    colorClass: "text-gray-800 hover:text-black",
  },
  {
    href: "https://www.xbox.com/en-GB/play/user/screeeda",
    icon: <FaXbox size={40} />,
    colorClass: "text-green-400 hover:text-green-500",
  },  
];

const Contact = () => {
  return (
    <div id="socials" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/pubg.jpg" clipClass="contact-clip-path-1" />
          <ImageClipBox
            src="/img/hitman.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/ac.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="Let&#39;s c<b>o</b>nnect"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/* Social Media Icons */}
          {socialLinks.map(({ href, icon, colorClass }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title={icon}
                containerClass={`mt-10 cursor-pointer ${colorClass}`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
