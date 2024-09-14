import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const form = sectionRef.current.querySelector("form");
    const title = sectionRef.current.querySelector("h2");
    const emailLink = sectionRef.current.querySelector("a[href^='mailto:']");
    const phoneLink = sectionRef.current.querySelector("a[href^='tel:']");
    const image = sectionRef.current.querySelector("img[alt='Kontakt']");
    const certificateImage = sectionRef.current.querySelector("img[alt='Qualität']");
    const text = sectionRef.current.querySelector("p");
    const clients = sectionRef.current.querySelectorAll(".styles__Client-sc-d26c2bdf-13");

    let scrollTriggerConfig = {
      trigger: sectionRef.current,
      start: "top+=200px bottom",
      end: "bottom-=550px center",
      scrub: 1,
      markers: false,
    };

    if (window.innerWidth <= 768) {
      scrollTriggerConfig = {
        ...scrollTriggerConfig,
        start: "top+=100px bottom",
        end: "center-=300px center",
      };
    }

    const tl = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    tl.fromTo(form, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
      .fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<")
      .fromTo(emailLink, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, "<")
      .fromTo(phoneLink, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, "<")
      .fromTo(image, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 }, "<")
      .fromTo(
        certificateImage,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "<",
      )
      .fromTo(text, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<");

    clients.forEach((client, index) => {
      tl.fromTo(client, { y: 50, opacity: 0 }, { y: 0, opacity: 0.7, duration: 1 }, index * 0.2);
    });

    return () => {
      tl.kill();
    };
  }, []);

  return { sectionRef };
};
