import { useEffect, useState } from "react";
import HeroTitle from "./HeroTitle";

const TOTAL_VIDEOS = 4;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);
  const [showPrimary, setShowPrimary] = useState(true);

  const getVideoSrc = (i) => `videos/hero-${i}.mp4`;

  // Preload video using hidden <video> instead of fetch
  useEffect(() => {
    const video = document.createElement("video");
    video.src = getVideoSrc(nextIndex);
    video.preload = "auto";
    video.load();
  }, [nextIndex]);

  const handleVideoEnd = () => {
    const upcoming = (nextIndex % TOTAL_VIDEOS) + 1;
    setCurrentIndex(nextIndex);
    setNextIndex(upcoming);
    setShowPrimary((prev) => !prev);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 min-h-screen overflow-hidden bg-teal-900">
        {/* Primary video */}
        <video
          key={showPrimary ? currentIndex : nextIndex}
          src={getVideoSrc(showPrimary ? currentIndex : nextIndex)}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showPrimary ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />

        {/* Secondary video layer (crossfade target) */}
        <video
          key={showPrimary ? nextIndex : currentIndex}
          src={getVideoSrc(showPrimary ? nextIndex : currentIndex)}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showPrimary ? "opacity-0 z-0" : "opacity-100 z-10"
          }`}
        />
      </div>

      <HeroTitle />
    </section>
  );
};

export default Hero;
