import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const title = sectionRef.current.querySelector(".title");
    const button = sectionRef.current.querySelector("[data-timeline='button']");
    const description = sectionRef.current.querySelector(".description");
    const years = sectionRef.current.querySelector(".years");
    const details = sectionRef.current.querySelectorAll("[data-timeline='details']");

    let scrollTriggerConfig = {
      trigger: sectionRef.current,
      start: "top 85%",
      end: "center center-=100px",
      scrub: 1,
      onEnter: () => setIsInView(true),
      onLeaveBack: () => setIsInView(false),
      markers: false,
    };

    if (window.innerWidth <= 768) {
      scrollTriggerConfig = {
        ...scrollTriggerConfig,
        start: "top 75%",
        end: "center+=100px center-=50px",
      };
    }

    const tl = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    tl.fromTo(years, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(button, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(description, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

    details.forEach((detail, index) => {
      tl.fromTo(
        detail,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        `-${index * 0.2}s`,
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return { sectionRef, isInView };
};
