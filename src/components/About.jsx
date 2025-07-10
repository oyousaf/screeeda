import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const clipRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: clipRef.current,
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <AnimatedTitle
          title="J<b>o</b>in me <b>o</b>n my g<b>a</b>ming <b>a</b>dvent<b>ures</b>"
          containerClass="mt-5 text-center tracking-wide"
        />

        <div className="about-subtext text-white text-center">
          <p>
            PUBG stands as one of my most cherished games, perhaps even my
            ultimate favourite.
          </p>
          <p className="text-gray-400">
            I also admire the rich, narrative-driven themes of Assassin's Creed,
            Hitman, and The Division.
          </p>
        </div>
      </div>

      <div ref={clipRef} className="h-dvh w-screen">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="A visual from my gaming journey"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
