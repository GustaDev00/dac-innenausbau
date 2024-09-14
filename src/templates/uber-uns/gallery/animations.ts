import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const hook = sectionRef.current.querySelector("img");
    const title = sectionRef.current.querySelector("h2");
    const description = sectionRef.current.querySelector("p");
    const gallery = sectionRef.current.querySelector("[data-timeline=gallery]");

    const animateOnLoad = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
        },
      });

      if (title) {
        tl.fromTo(title, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
      }

      if (description) {
        tl.fromTo(description, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
      }

      if (gallery) {
        tl.fromTo(gallery, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 }, "-=0.5");
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: -50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: title,
                start: "top 90%",
                end: "top 40%",
                scrub: 1,
              },
            },
          );
        }

        if (description) {
          gsap.fromTo(
            description,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: description,
                start: "top 90%",
                end: "top 30%",
                scrub: 1,
              },
            },
          );
        }

        if (gallery) {
          gsap.fromTo(
            gallery,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              scrollTrigger: {
                trigger: gallery,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
              },
            },
          );
        }
      } else {
        animateOnLoad();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { sectionRef };
};
