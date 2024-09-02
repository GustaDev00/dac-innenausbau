import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heightStart = headerRef?.current?.offsetHeight || 82;

    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: "html",
        start: `${heightStart + 1}px top`,
        end: "bottom top",
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
