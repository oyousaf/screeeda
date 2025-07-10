import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navItems = ["About", "Socials"];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      const playPromise = audioElementRef.current.play();
      if (playPromise?.catch) {
        playPromise.catch(() => setIsAudioPlaying(false));
      }
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      container.classList.remove("floating-nav");
    } else if (scrollingDown) {
      setIsNavVisible(false);
      container.classList.add("floating-nav");
    } else if (scrollingUp) {
      setIsNavVisible(true);
      container.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    if (!navContainerRef.current) return;
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${id}`,
        offsetY: 50,
      },
      ease: "power2.inOut",
    });
  };

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-dash-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 bg-[#003630] rounded-lg">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <img
              src="/img/logo.png"
              alt="logo"
              className="w-[50px] cursor-pointer"
              onClick={scrollToTop}
            />
          </div>

          {/* Nav + Audio */}
          <div className="flex h-full items-center">
            {/* Nav Items */}
            <ul className="hidden md:flex gap-5 items-center">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    className="nav-hover-btn"
                    onClick={() => scrollToSection(item.toLowerCase())}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Audio Toggle */}
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
              aria-label="Toggle ambient background music"
            >
              <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
