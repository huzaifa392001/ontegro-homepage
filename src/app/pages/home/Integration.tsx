"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function Integration() {
  const introRef = useRef<HTMLDivElement>(null);
  const intro1Ref = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLDivElement>(null);
  const integRef = useRef<HTMLDivElement>(null);
  const extraLargeScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  const LargeScreenxl = useMediaQuery({ query: "(min-width: 1024px)" });
  const largeScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const mediaScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const smallScreen = useMediaQuery({ query: "(max-width: 576px)" });
  const extraScreen = useMediaQuery({ query: "(max-width: 420px)" });

  useEffect(() => {
    const intro = introRef.current!;
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        toggleActions: "play none none reverse",
        start: "top bottom",
      },
    });

    tl.fromTo(
      introRef.current,
      {
        fontSize: extraLargeScreen
          ? 160
          : LargeScreenxl
          ? 140
          : largeScreen
          ? 80
          : !mediaScreen
          ? 40
          : !smallScreen
          ? 50
          : !extraScreen
          ? 65
          : 45,
        y: 200,
        x: largeScreen ? "10%" : "30%",
        delay: 0.5,
        ease: "power3.out",
      },
      {
        fontSize: extraLargeScreen
          ? 52
          : !mediaScreen
          ? 46
          : !smallScreen
          ? 40
          : !extraScreen
          ? 32
          : 26,
        duration: 1,
        delay: 0.9,
        ease: "power3.out",
        y: 0,
        x: 0,
      }
    );
    tl.add(
      gsap.fromTo(
        secRef.current,
        { opacity: 0 },
        { opacity: 1, ease: "expo.inOut", duration: 1 }
      ),
      "typewriter"
    )
      .add(
        gsap.fromTo(
          paraRef.current,
          { opacity: 0 },
          { opacity: 1, ease: "expo.inOut", duration: 1 }
        ),

        "typewriter"
      )
      .add(
        gsap.fromTo(
          integRef.current,
          { opacity: 0 },
          { opacity: 1, ease: "expo.inOut", duration: 1 }
        ),

        "typewriter"
      );
  }, []);
  return (
    <div
      ref={intro1Ref}
      className="bg-[#000000] min-h-screen lg:pt-[30px] pt-[60px]  h-full flex items-center justify-center relative"
    >
      <div className="w-full flex flex-col lg:flex-row justify-center items-center container px-4 mx-auto">
        <div>
          <h2
            ref={introRef}
            className="text-white font-montserrat max-lg:text-[30px] text-[7vw] xl:text-[45px] 2xl:text-[52px] font-bold mb-5"
          >
            Integrating
          </h2>
          <h5
            ref={secRef}
            className="text-white leading-[100%] pb-[20px] font-[900] 2xl:text-[120px] lg:text-[110px] md:text-[85px] sm:text-[60px] text-[45px]  font-montserrat w-full  2xl:w-[967px]"
          >
            Artificial Intelligence
          </h5>
          <h6
            ref={paraRef}
            className="2xl:w-[967px] w-full text-[#5D5D5D] 2xl:text-[70px] xl:text-[55px] md:text-[45px] sm:text-[30px] text-[25px] font-montserrat leading-[100%] py-[20px]  xl:mb-0"
          >
            In our Core Facilities Management Operations{" "}
          </h6>
        </div>
        <div
          ref={integRef}
          className={largeScreen ? "w-[50vw] xl:mb-0 mb-20" : ""}
        >
          <Image
            alt=""
            className="integration-img w-full max-lg:w-[700px] h-auto"
            src="/integration.png"
            width={967}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Integration;
