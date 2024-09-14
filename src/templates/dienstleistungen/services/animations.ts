import { useRef, useEffect } from "react";
import gsap from "gsap";
import { once } from "events";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const menu = sectionRef.current.querySelector("[data-timeline=menu]");
    const titleMenu = menu?.querySelector("h2");
    const itemsMenu = menu?.querySelectorAll("ul li");

    const services = sectionRef.current.querySelector("[data-timeline=services]");

    const contact = sectionRef.current.querySelector("[data-timeline=contact]");
    const titleContact = contact?.querySelector("h2");
    const descriptionContact = contact?.querySelector("p");
    const itemsContact = contact?.querySelectorAll("ul li");

    const details = sectionRef.current.querySelectorAll("[data-timeline=details]");

    const tl = gsap.timeline({ delay: 0.5 });

    if (titleMenu) {
      tl.fromTo(titleMenu, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
    }

    if (itemsMenu) {
      tl.fromTo(itemsMenu, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.1 });
    }

    tl.fromTo(services, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<");

    let scrollTriggerConfig = {
      trigger: services,
      start: "center-=200 center",
      end: "bottom center",
      scrub: 1,
      markers: true,
      once: true,
    };

    if (window.innerWidth <= 768) {
      scrollTriggerConfig = {
        ...scrollTriggerConfig,
        trigger: sectionRef.current,
        start: "bottom 75%",
        end: "bottom center-=50px",
      };
    }

    const tl2 = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    if (titleContact) {
      tl2.fromTo(titleContact, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
    }

    if (descriptionContact) {
      tl2.fromTo(descriptionContact, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
    }

    if (itemsContact) {
      tl2.fromTo(itemsContact, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.1 });
    }

    if (details) {
      details.forEach((detail) => {
        tl2.fromTo(detail, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.1 });
      });
    }
  }, []);

  return { sectionRef };
};
