"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
        delay: 0,
        disable: false,
      });
      // Hard refresh ensures elements already in viewport animate in
      AOS.refreshHard();
    };

    // Init immediately AND after full load to catch any late-mounted elements
    initAOS();
    window.addEventListener("load", initAOS);
    return () => window.removeEventListener("load", initAOS);
  }, []);

  return null;
}
