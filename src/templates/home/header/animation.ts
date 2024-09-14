/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({ delay: 1 });

    const title = sectionRef.current.querySelector("#title");
    const description = sectionRef.current.querySelector("#description");
    const button = sectionRef.current.querySelector("[data-timeline='button']");
    const services = sectionRef.current.querySelector("[data-timeline='card-services']");

    tl.fromTo(title, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(description, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<+=0.2")
      .fromTo(button, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<+=0.2")
      .fromTo(services, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<");
  }, []);

  return { sectionRef };
};
