import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { FaArrowDown } from "react-icons/fa";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  const totalVideos = 4;
  const videoRef = useRef(null);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev % totalVideos) + 1);
      setFadeOut(false);
    }, 500);
  };

  useGSAP(() => {
    gsap.fromTo(
      "#hero-overlay",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="relative z-10 min-h-screen overflow-hidden rounded-lg bg-blue-75">
        <video
          key={currentIndex}
          ref={videoRef}
          src={getVideoSrc(currentIndex)}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden
        />
      </div>

      {/* Overlay Text + CTA */}
      <div
        id="hero-overlay"
        className="absolute inset-0 z-40 flex flex-col justify-start px-5 pt-24 sm:px-10"
      >
        <h1 className="special-font hero-heading text-teal-100 tracking-wide">
          scr<b>eee</b>da
        </h1>
        <h2 className="sr-only">
          Where reflex meets reason and every frame tells a story — screeeda, a
          UK-based FPS and RPG gamer crafting digital tales through skill and
          strategy.
        </h2>
        <p className="mb-5 max-w-64 font-robert-regular text-teal-100">
          Where reflex meets reason <br /> and every frame tells a story
        </p>
        <Link to="about" smooth duration={500} offset={-100}>
          <Button
            title="Explore"
            leftIcon={<FaArrowDown />}
            containerClass="bg-yellow-300 flex-center gap-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
