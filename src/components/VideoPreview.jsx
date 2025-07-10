import { gsap } from "gsap";
import { useState, useRef, useEffect, useCallback } from "react";

export const VideoPreview = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }) => {
      const rect = currentTarget.getBoundingClientRect();
      const xOffset = clientX - (rect.left + rect.width / 2);
      const yOffset = clientY - (rect.top + rect.height / 2);

      if (isHovering && sectionRef.current && contentRef.current) {
        const commonConfig = { duration: 1, ease: "power1.out" };

        gsap.to(sectionRef.current, {
          x: xOffset,
          y: yOffset,
          rotationY: xOffset / 2,
          rotationX: -yOffset / 2,
          ...commonConfig,
        });

        gsap.to(contentRef.current, {
          x: -xOffset,
          y: -yOffset,
          ...commonConfig,
        });
      }
    },
    [isHovering]
  );

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const commonConfig = { x: 0, y: 0, duration: 1, ease: "power1.out" };

    if (!isHovering) {
      gsap.to(sectionRef.current, {
        rotationX: 0,
        rotationY: 0,
        ...commonConfig,
      });

      gsap.to(contentRef.current, commonConfig);
    }
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="absolute z-50 size-full overflow-hidden rounded-lg"
      style={{ perspective: "500px" }}
    >
      <div
        ref={contentRef}
        className="origin-center rounded-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;
