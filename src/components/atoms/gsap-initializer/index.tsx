import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

export const GSAPInitializer = (): null => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    ScrollTrigger.defaults({
      scroller: "main",
    });

    let previousHeight = document.body.scrollHeight;
    const checkChangeHeight = (): void => {
      const currentHeight = document.body.scrollHeight;

      console.log("previousHeight", previousHeight, currentHeight);
      if (previousHeight !== currentHeight) {
        ScrollTrigger.refresh();
        previousHeight = currentHeight;
      }

      window.requestAnimationFrame(checkChangeHeight);
    };

    checkChangeHeight();
  }, []);

  return null;
};
