import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive") ||
        target.closest(".interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined" || window.innerWidth < 768) {
    return null; // Don't show on mobile
  }

  return (
    <>
      <style>{`
        body {
          cursor: none;
        }
        a, button, [role="button"], input, select, textarea {
          cursor: none;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 32,
          height: 32,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="bg-[#c6ff38] rounded-full w-full h-full flex items-center justify-center relative shadow-[0_0_15px_#c6ff38]"
          animate={{
            scale: isHovering ? 1.8 : 1,
            backgroundColor: isHovering ? "rgba(198, 255, 56, 0.8)" : "rgba(198, 255, 56, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
           <motion.div 
             className="bg-[#c6ff38] rounded-full w-2 h-2 absolute"
             animate={{
                scale: isHovering ? 0 : 1,
             }}
           />
        </motion.div>
      </motion.div>
    </>
  );
}
