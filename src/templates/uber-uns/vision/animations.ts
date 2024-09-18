import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const title = sectionRef.current.querySelector("h2");
    const description = sectionRef.current.querySelector("p");
    const items = sectionRef.current.querySelectorAll("ul li");
    const img = sectionRef.current.querySelector("img");

    const animateOnLoad = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      });

      if (img) {
        tl.fromTo(img, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 });
      }

      if (title) {
        tl.fromTo(title, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
      }

      if (description) {
        tl.fromTo(description, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
      }

      if (items.length > 0) {
        tl.fromTo(
          items,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
          "-=0.5",
        );
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (img) {
          gsap.fromTo(
            img,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
              },
            },
          );
        }

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
                start: "top 70%",
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
                start: "top 60%",
                end: "top 30%",
                scrub: 1,
              },
            },
          );
        }

        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              scrollTrigger: {
                trigger: items[0],
                start: "top 50%",
                end: "top 20%",
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
  }, []);

  return { sectionRef };
};
