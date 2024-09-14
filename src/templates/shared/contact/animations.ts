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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=300px bottom",
        end: "bottom-=500px center",
        scrub: 1,
        markers: true,
      },
    });

    tl.fromTo(form, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
      .fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<")
      .fromTo(emailLink, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(phoneLink, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(image, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(certificateImage, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(text, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

    clients.forEach((client, index) => {
      tl.fromTo(client, { y: 50, opacity: 0 }, { y: 0, opacity: 0.6, duration: 1 }, index * 0.2);
    });

    console.log(form, title, emailLink, phoneLink, image, certificateImage, text, clients);

    return () => {
      tl.kill();
    };
  }, []);

  return { sectionRef };
};
