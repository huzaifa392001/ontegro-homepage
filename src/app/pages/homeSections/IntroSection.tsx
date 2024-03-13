"use client";
//ts-nocheck

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./homeStyle.css";

const IntroSection = () => {
  const introRef = useRef<HTMLDListElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const h3Ref = useRef<HTMLDivElement>(null);
  const backBgImg2 = useRef<HTMLDivElement>(null);
  const firstSec = useRef<HTMLDivElement>(null);
  const secondSec = useRef<HTMLDivElement>(null);
  const foregroundImg = useRef<HTMLImageElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(
    () => {
      let introTl = gsap.timeline();
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          pin: introRef.current,
          scrub: 1,
          snap: 1,
        },
      });
      introTl.to(".introAnim", {
        y: 0,
        autoAlpha: 1,
        stagger: 0.2,
      });
      tl.to(".frontBgImg img", {
        yPercent: 25,
        xPercent: 25,
        scale: 1.5,
      })
        .to(
          ".bannerSec .backBgImg img",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".firstContent",
          {
            autoAlpha: 0,
          },
          "<"
        )
        .to(
          ".secondContent",
          {
            autoAlpha: 1,
            duration: 1,
          },
          "-=0.5"
        )
        .to([".textriter", "#typewriter"], {
          opacity: 1,
        })
        .to(".cursorContainer", {
          xPercent: 100,
        });
    },
    {
      scope: introRef,
    }
  );
  return (
    <section className="bannerSec" ref={introRef}>
      <div className="h-full w-full inset-0">
        <div className="backBgImg inset-0">
          <Image
            src="/Background.jpg"
            alt=""
            fill={true}
            className="front-img block w-full h-auto object-cover pointer-events-none"
            priority={true}
            ref={foregroundImg}
          />
        </div>
        <div className="frontBgImg">
          <Image
            src="/bannerimg.png"
            alt=""
            className="introAnim"
            fill={true}
            priority={true}
          />
        </div>

        <div ref={firstSec} className="firstContent">
          <div className="container mx-auto px-4">
            <div className="block firstText">
              <img src="/Heading.svg" alt="" className="introAnim" />
            </div>
            <h1 className="introAnim">FACILITIES MANAGEMENT SOLUTIONS</h1>
          </div>
        </div>
        <div
          ref={secondSec}
          className="secondContent container relative h-full px-4 mx-auto"
        >
          <div className="absolute z-30 top-1/2 -translate-y-1/2">
            <h3
              ref={h3Ref}
              className="2xl:text-[90px] sm:text-[80px] text-[12vw] text-[#000000] leading-[97%] w-full lg:w-[688px] font-montserrat font-[600]"
            >
              DEFINING TOMORROW’S STANDARDS
            </h3>
            <div className="relative w-[136px] lg:w-fit" id="typewriter">
              <h6
                id="typewriterTrigger"
                ref={textRef}
                className="text-[12vw] sm:text-[80px] z-[99] 2xl:text-[90px] w-full text-[#023343] overflow-hidden leading-[97%] textcover font-montserrat font-[600]"
              >
                TODAY.
              </h6>
              <div className="cursorContainer">
                <span className="textriter" ref={coverRef}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
