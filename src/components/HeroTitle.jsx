import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";
import Button from "./Button";

const HeroTitle = () => {
  const overlayRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-20 flex flex-col justify-start px-5 pt-24 sm:px-10"
    >
      <h1 className="special-font hero-heading text-teal-100 tracking-wide">
        <b>screeeda</b>
      </h1>

      <h2 className="sr-only">
        Where reflex meets reason and every frame tells a story — screeeda, a
        UK-based FPS and RPG gamer crafting digital tales through skill and
        strategy.
      </h2>

      <p className="mb-5 max-w-64 font-robert-regular text-teal-100">
        Where reflex meets reason <br /> and every frame tells a story
      </p>

      <Link
        to="about"
        smooth
        duration={500}
        offset={-100}
        className="inline-block w-fit"
      >
        <Button
          title="Explore"
          leftIcon={<FaArrowDown />}
          containerClass="transition-all duration-300 ease-in-out hover:bg-teal-900 hover:text-white hover:scale-105 flex-center gap-1"
        />
      </Link>
    </div>
  );
};

export default HeroTitle;
