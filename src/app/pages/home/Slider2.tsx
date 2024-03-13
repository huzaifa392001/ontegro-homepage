"use client";
//ts-nocheck

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IntroSection = () => {
  const introRef = useRef<HTMLDListElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const intro = introRef.current!;
    const secondImg = intro.querySelector(".front1BgImg");
    const topimg = intro.querySelector(".backBgImg");
    const firstText = intro.querySelector(".firstText");
    const secondText = intro.querySelector(".secondText");
    const otherText = intro.querySelector(".fadingtext");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        toggleActions: "play none none reverse",
        start: "top center",
      },
    });
    tl.fromTo(
      topimg,
      { opacity: 1 },
      {
        // opacity: 0,
        ease: "expo.inOut",
        duration: 1,
      }
    )
      .fromTo(
        secondImg,
        { left: 0, bottom: 0 },
        {
          scale: 1.3,
          bottom: -10,
          ease: "expo.inOut",
          duration: 1,
        }
      )
      .fromTo(
        otherText,
        { opacity: 0 },
        { opacity: 1, ease: "expo.inOut", duration: 1 }
      )
      .to(coverRef.current, {
        opacity: 1,
      });
    let animationParams: any;
    let animationWidthStart: any;
    let animationWidthEnd: any;
    if (window.innerWidth <= 575) {
      animationParams = {
        x: "48vw",
        opacity: 1,
        display: "none",
        ease: "expo.inOut",
        duration: 1,
      };
      animationWidthStart = {
        width: 0,
      };
      animationWidthEnd = {
        opacity: 1,
        width: "48vw",
        ease: "expo.inOut",
        duration: 1,
      };
    } else {
      animationParams = {
        x: 350,
        display: "none",
        ease: "expo.inOut",
        duration: 1,
      };
      animationWidthStart = {
        width: 0,
      };
      animationWidthEnd = {
        width: 350,
        ease: "expo.inOut",
        duration: 1,
      };
    }
    tl.to(textRef.current, { opacity: 1 });

    tl.add(
      gsap.fromTo(textRef.current, animationWidthStart, animationWidthEnd),
      "typewriter"
    ).add(gsap.to(coverRef.current, animationParams), "typewriter");
  }, []);

  return (
    <section
      id="intro"
      className="min-h-screen relative overflow-hidden w-full h-full bg-white"
      ref={introRef}
    >
      <div className="h-full">
        <div className="backBgImg absolute inset-0">
          <Image
            src="/Future-Building-Enhanced.png"
            alt=""
            className="back-img block h-full object-cover w-full pointer-events-none"
            fill={true}
            // width={1920}
            // height={1080}
            priority={true}
          />
        </div>
        <div className="front1BgImg absolute inset-x-0 z-60">
          <Image
            src="/Future-Building-Enhanced001.png"
            alt=""
            className="front-img block absolute w-full left-0 bottom-0 pointer-events-none"
            priority={true}
            // fill={true}
            width={1920}
            height={600}
          />
        </div>

        <div className="container h-full px-4 mx-auto">
          <div className="absolute z-30 top-1/2 -translate-y-1/2">
            <h3 className="2xl:text-[90px] sm:text-[80px] text-[12vw] opacity-0 fadingtext leading-[97%] w-full lg:w-[688px] font-montserrat font-[600] ">
              DEFINING TOMORROW’S STANDARDS
            </h3>
            <div className="relative w-[136px] lg:w-[688px]" id="typewriter">
              <h6
                id="typewriterTrigger"
                ref={textRef}
                className="text-[12vw] opacity-0 sm:text-[80px] 2xl:text-[90px] w-full text-[#278CB3] overflow-hidden leading-[97%] textcover font-montserrat font-[600] "
              >
                TODAY.
              </h6>
              <span className="textriter opacity-0" ref={coverRef}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
