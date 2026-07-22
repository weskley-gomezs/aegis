import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

export default function AnimatedCounter({
  value,
  className
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract number and suffix
  const match = value.match(/^([0-9]+)(.*)$/);
  
  if (!match) {
    return <span className={className}>{value}</span>;
  }

  const num = parseInt(match[1], 10);
  const suffix = match[2];

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(num);
    }
  }, [isInView, num, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className={className}>{0}{suffix}</span>;
}
