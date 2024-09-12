import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "top top+=60px",
      onEnter: () => setIsInView(true),
      onLeave: () => setIsInView(false),
      onEnterBack: () => setIsInView(true),
      onLeaveBack: () => setIsInView(false),
      markers: false,
    });
  }, []);

  return {
    ref,
    isInView,
  };
};
