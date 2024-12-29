import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.inOut",
    });
  };

  // Track scroll position and show button when halfway down the page
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShowButton(true);  // Show the button after scrolling halfway
    } else {
      setShowButton(false); // Hide the button if above halfway
    }
  };

  // Add event listener to track scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition-all"
          title="Scroll to Top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
