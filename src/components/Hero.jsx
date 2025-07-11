import { useEffect, useRef, useState } from "react";
import HeroTitle from "./HeroTitle";

const TOTAL_VIDEOS = 4;

const Hero = () => {
  const [indexA, setIndexA] = useState(1);
  const [indexB, setIndexB] = useState(2);
  const [showA, setShowA] = useState(true);
  const [isNextReady, setIsNextReady] = useState(false);

  const videoRefA = useRef(null);
  const videoRefB = useRef(null);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const currentIndex = showA ? indexA : indexB;
  const nextIndex = (currentIndex % TOTAL_VIDEOS) + 1;

  const handleVideoPlay = () => {
    const preloadRef = showA ? videoRefB.current : videoRefA.current;
    if (!preloadRef) return;

    preloadRef.src = getVideoSrc(nextIndex);
    preloadRef.load();

    const onReady = () => {
      setIsNextReady(true);
    };

    preloadRef.addEventListener("canplaythrough", onReady, { once: true });

    return () => {
      preloadRef.removeEventListener("canplaythrough", onReady);
    };
  };

  const handleVideoEnd = (source) => {
    const isActive = (source === "A" && showA) || (source === "B" && !showA);
    if (!isActive || !isNextReady) return;

    setIsNextReady(false);

    if (showA) {
      setIndexB(nextIndex);
    } else {
      setIndexA(nextIndex);
    }
    setShowA(!showA);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 min-h-screen overflow-hidden bg-black">
        {/* Video A */}
        <video
          key={indexA}
          ref={videoRefA}
          src={getVideoSrc(indexA)}
          autoPlay
          muted
          playsInline
          onPlay={handleVideoPlay}
          onEnded={() => handleVideoEnd("A")}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showA ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />

        {/* Video B */}
        <video
          key={indexB}
          ref={videoRefB}
          src={getVideoSrc(indexB)}
          autoPlay
          muted
          playsInline
          onPlay={handleVideoPlay}
          onEnded={() => handleVideoEnd("B")}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showA ? "opacity-0 z-0" : "opacity-100 z-10"
          }`}
        />
      </div>

      <HeroTitle />
    </section>
  );
};

export default Hero;
