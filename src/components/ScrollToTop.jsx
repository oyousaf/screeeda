import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.inOut",
    });
  };

  const handleScroll = useCallback(() => {
    setShowButton(window.scrollY > window.innerHeight / 2);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition-all"
      aria-label="Scroll to top"
      title="Scroll to Top"
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
