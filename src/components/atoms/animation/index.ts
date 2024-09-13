import { useRef, useEffect } from "react";
import gsap from "gsap";

const Animation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.set(section, { opacity: 1, x: 0, y: 0 });

      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          start: "top 90%",
          end: "top center",
          markers: false,
        },
        y: 20,
        x: -20,
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
      });
    }
  }, []);

  return { sectionRef };
};

export default Animation;
