import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const author = sectionRef.current.querySelector("[data-timline=img-author]");
    const title = sectionRef.current.querySelector("h2");
    const description = sectionRef.current.querySelector("p");
    const name = sectionRef.current.querySelector("[data-timeline=author] h3");
    const position = sectionRef.current.querySelector("[data-timeline=author] p");
    const signature = sectionRef.current.querySelector("[data-timeline=author] img");

    const animateOnLoad = () => {
      if (author) {
        gsap.fromTo(author, { x: -100, opacity: 0 }, { x: 0, opacity: 1, delay: 1, duration: 2 });
      }

      if (title) {
        gsap.fromTo(title, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
      }

      if (description) {
        gsap.fromTo(description, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
      }

      if (name) {
        gsap.fromTo(name, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
      }

      if (position) {
        gsap.fromTo(position, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
      }

      if (signature) {
        gsap.fromTo(signature, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 });
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (author) {
          gsap.fromTo(
            author,
            { x: -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 2,
              scrollTrigger: {
                trigger: author,
                start: "top 90%",
                end: "top 30%",
                scrub: 1,
              },
            },
          );
        }

        if (title) {
          gsap.fromTo(
            title,
            { y: -100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
              },
            },
          );
        }

        if (description) {
          gsap.fromTo(
            description,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              scrollTrigger: {
                trigger: description,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
              },
            },
          );
        }

        if (name) {
          gsap.fromTo(
            name,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              scrollTrigger: {
                trigger: name,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
              },
            },
          );
        }

        if (position) {
          gsap.fromTo(
            position,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              scrollTrigger: {
                trigger: position,
                start: "top 90%",
                end: "top 50%",
                scrub: 1,
              },
            },
          );
        }

        if (signature) {
          gsap.fromTo(
            signature,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 2,
              scrollTrigger: {
                trigger: signature,
                start: "top 90%",
                end: "top 50%",
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
