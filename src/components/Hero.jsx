import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroTitle from "./HeroTitle";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_VIDEOS = 4;

const Hero = () => {
  const [indexA, setIndexA] = useState(1);
  const [indexB, setIndexB] = useState(2);
  const [showA, setShowA] = useState(true);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const currentIndex = showA ? indexA : indexB;

  // Preload next video
  useEffect(() => {
    const nextIndex = (currentIndex % TOTAL_VIDEOS) + 1;
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "video";
    preloadLink.href = getVideoSrc(nextIndex);
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, [currentIndex]);

  const handleVideoEnd = (source) => {
    const isActive = (source === "A" && showA) || (source === "B" && !showA);
    if (!isActive) return;

    const nextIndex = (currentIndex % TOTAL_VIDEOS) + 1;
    if (showA) {
      setIndexB(nextIndex);
    } else {
      setIndexA(nextIndex);
    }
    setShowA(!showA);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Crossfading Videos */}
      <div className="relative z-10 min-h-screen overflow-hidden rounded-lg bg-blue-75">
        {/* Video A */}
        <video
          key={indexA}
          src={getVideoSrc(indexA)}
          autoPlay
          muted
          playsInline
          onEnded={() => handleVideoEnd("A")}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showA ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />

        {/* Video B */}
        <video
          key={indexB}
          src={getVideoSrc(indexB)}
          autoPlay
          muted
          playsInline
          onEnded={() => handleVideoEnd("B")}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showA ? "opacity-0 z-0" : "opacity-100 z-10"
          }`}
        />
      </div>

      {/* Static Overlay Content */}
      <HeroTitle />
    </section>
  );
};

export default Hero;
