import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

import { FaDiscord, FaInstagram, FaSteam, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" className="w-full h-auto object-cover" />
  </div>
);

const socialLinks = [
  {
    href: "https://discord.com/invite/yUwFBJ6AZQ",
    icon: <FaDiscord size={32} />,
    colorClass: "hover:text-blue-500",
  },
  {
    href: "https://instagram.com/screeeda",
    icon: <FaInstagram size={32} />,
    colorClass: "hover:text-orange-500",
  },
  {
    href: "https://steamcommunity.com/id/screeeda",
    icon: <FaSteam size={32} />,
    colorClass: "hover:text-blue-900",
  },
  {
    href: "https://twitch.tv/screeeda",
    icon: <FaTwitch size={32} />,
    colorClass: "hover:text-violet-500",
  },
  {
    href: "https://x.com/screeeda",
    icon: <FaXTwitter size={32} />,
    colorClass: "hover:text-black",
  },
];

const Contact = () => {
  return (
    <div id="socials" className="my-12 w-full px-4 sm:px-6 lg:px-10">
      <div className="relative rounded-lg bg-teal-900 py-16 sm:py-24 text-teal-50 overflow-hidden">
        {/* PUBG */}
        <div className="hidden sm:block absolute -left-20 top-0 h-full w-72 lg:left-40 lg:w-96">
          <ImageClipBox src="/img/pubg.jpg" clipClass="contact-clip-path-1" />
        </div>

        {/* Hitman */}
        <div className="hidden sm:block absolute translate-y-60 lg:translate-y-[6rem] h-full w-72 lg:w-96">
          <ImageClipBox src="/img/hitman.jpg" clipClass="contact-clip-path-2" />
        </div>

        {/* AC */}
        <div
          className="absolute z-0 w-40 right-0 top-0 opacity-50
                        sm:left-auto sm:right-10 sm:top-1/2 sm:w-60 sm:opacity-100
                        md:right-10 md:top-1/2 md:w-72 lg:top-20 lg:w-80"
        >
          <ImageClipBox
            src="/img/ac.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Text and Buttons */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <AnimatedTitle
            title="Let&#39;s c<b>o</b>nnect"
            containerClass="special-font w-full text-4xl sm:text-5xl md:text-[6.2rem] font-zentry font-black leading-tight tracking-wide"
          />

          <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8">
            {socialLinks.map(({ href, icon, colorClass }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  title={icon}
                  containerClass={`cursor-pointer ${colorClass}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
