import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heightStart = headerRef?.current?.offsetHeight ?? 72;

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

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0 });

    tl.fromTo(loadingRef.current, { opacity: 1 }, { opacity: 0, duration: 2 }).to(
      loadingRef.current,
      { display: "none", duration: 0 },
      ">",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return { headerRef, navRef, loadingRef };
};
