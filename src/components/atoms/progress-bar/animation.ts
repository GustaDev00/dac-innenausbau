import { useEffect, useRef } from "react";
import gsap from "gsap";

export default ({ duration, isActive }: { duration: number; isActive: boolean }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) {
      // gsap.set(progressRef.current, { width: "0%" });
      return;
    }

    gsap.set(progressRef.current, { width: "0%" });

    gsap.to(progressRef.current, {
      width: "100%",
      duration,
      ease: "linear",
    });
  }, [isActive, duration, progressRef]);

  return { progressRef };
};
