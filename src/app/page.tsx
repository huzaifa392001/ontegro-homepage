"use client";
import React, { useEffect, useLayoutEffect } from "react";
import Header from "./components/header/header";
import { Footer } from "./components/footer/Footer";
import { useTriggerStore } from "@/store/Trigger-Store";
import IntroSection from "./pages/homeSections/IntroSection";
import Redefining from "./pages/homeSections/Redefining";
import Integration from "./pages/homeSections/Integration";
import TechSection from "./pages/homeSections/TechSection";
import Team from "./pages/homeSections/Team";
import Expertise from "./pages/homeSections/Expertise";
import ISOS from "./pages/homeSections/ISOStandards";
import TrustedByTheBest from "./pages/homeSections/TrustedByTheBest";
import AwardSection from "./pages/homeSections/AwardSection";
import GreenSection from "./pages/homeSections/GreenSection";
import "./globals.css";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  const trigger = useTriggerStore((state: any) => state.trigger);
  const setHeader = useTriggerStore((state: any) => state.setHeader);

  return (
    <div>
      <main className="">
        <Header color={false} />

        <IntroSection />
        <Redefining />
        <Integration />
        <TechSection />
        <Team />
        <Expertise />
        <ISOS />
        <TrustedByTheBest />
        <AwardSection />
        <GreenSection />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
