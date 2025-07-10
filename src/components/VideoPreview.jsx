import { gsap } from "gsap";
import { useState, useRef, useEffect, useCallback } from "react";

const VideoPreview = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }) => {
      const rect = currentTarget.getBoundingClientRect();
      const xOffset = clientX - (rect.left + rect.width / 2);
      const yOffset = clientY - (rect.top + rect.height / 2);

      if (!isHovering || !sectionRef.current || !contentRef.current) return;

      const config = { duration: 0.6, ease: "power2.out" };

      gsap.to(sectionRef.current, {
        x: xOffset,
        y: yOffset,
        rotationY: xOffset / 2,
        rotationX: -yOffset / 2,
        ...config,
      });

      gsap.to(contentRef.current, {
        x: -xOffset,
        y: -yOffset,
        ...config,
      });
    },
    [isHovering]
  );

  useEffect(() => {
    const reset = {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      duration: 0.6,
      ease: "power2.out",
    };
    if (!isHovering && sectionRef.current && contentRef.current) {
      gsap.to(sectionRef.current, reset);
      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [isHovering]);

  return (
    <div
      ref={sectionRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className="relative size-full overflow-hidden rounded-lg"
      style={{ perspective: "500px" }}
    >
      <div
        ref={contentRef}
        className="h-full w-full origin-center rounded-lg will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
};

export default VideoPreview;
