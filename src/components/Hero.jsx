import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const miniPreviewRef = useRef(null);
  const fullVideoRef = useRef(null);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => setLoadedVideos((prev) => prev + 1);

  useEffect(() => {
    if (loadedVideos >= totalVideos - 1) setLoading(false);
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => fullVideoRef.current?.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] inset-0 bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 min-h-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Interactive Preview */}
        <div className="absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg mask-clip-path">
          <VideoPreview>
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={miniPreviewRef}
                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                loop
                muted
                playsInline
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
                aria-hidden
              />
            </div>
          </VideoPreview>
        </div>

        {/* Full Video Reveal */}
        <video
          ref={fullVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          playsInline
          id="next-video"
          className="absolute-center invisible z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
          aria-hidden
        />

        {/* Full Background Video */}
        <video
          src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          onLoadedData={handleVideoLoad}
          aria-hidden
        />
      </div>

      {/* Overlay Text + CTA */}
      <div className="absolute inset-0 z-40 flex flex-col justify-start px-5 pt-24 sm:px-10">
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
