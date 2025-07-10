import { useEffect, useState } from "react";
import HeroTitle from "./HeroTitle";

const TOTAL_VIDEOS = 4;

const Hero = () => {
  const [indexA, setIndexA] = useState(1);
  const [indexB, setIndexB] = useState(2);
  const [showA, setShowA] = useState(true);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const currentIndex = showA ? indexA : indexB;

  // Preload the next video using fetch
  useEffect(() => {
    const nextIndex = (currentIndex % TOTAL_VIDEOS) + 1;
    fetch(getVideoSrc(nextIndex)).catch(() => {});
  }, [currentIndex]);

  // Handle crossfade and index switch
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
      {/* Crossfading Background Videos */}
      <div className="relative z-10 min-h-screen overflow-hidden bg-black">
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

      {/* Static Animated Overlay */}
      <HeroTitle />
    </section>
  );
};

export default Hero;
