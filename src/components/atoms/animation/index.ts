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
          start: "top+=250px 85%",
          end: "top center",
          markers: false,
        },
        y: 40,
        x: -40,
        opacity: 0,
        duration: 4,
      });
    }
  }, []);

  return { sectionRef };
};

export default Animation;
