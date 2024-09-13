import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heightStart = headerRef?.current?.offsetHeight || 72;

    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: "main",
        start: `${heightStart + 1}px top`,
        end: "bottom+=3000 top",
        toggleClass: {
          targets: navRef.current,
          className: "fixed",
        },
        markers: false,
      },
    });
  }, []);

  return { headerRef, navRef };
};
