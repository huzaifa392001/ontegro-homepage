"use client";

import PageContent from "@/app/about-us/PageContent";
import GreenTodayContent from "@/app/components/reuseable/GreenTodayContent";
import HomePageContent from "@/app/components/reuseable/PageContent";
import RecognizePageContent from "@/app/components/reuseable/RecognizePageContent";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const GreenSection = () => {
  const introRef = useRef<HTMLDListElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.to(".greenMainImg", {
      rotation: "+=360",
      repeat: -1,
      duration: 15,
      ease: "none",
    });
    gsap.set(".greenContent h1", {
      y: -50,
      sacle: 2,
      autoAlpha: 0,
    });
    gsap.set([".greenContent p", ".greenContent button"], {
      y: 50,
      autoAlpha: 0,
    });
    let tl = gsap.timeline({
      defaults: {
        duration: 1.25,
      },
      scrollTrigger: {
        trigger: introRef.current,
        start: "top top",
        end: "bottom center",
        pin: true,
        markers: false,
        onEnter: () => {
          tl.to(".greenContent h1", {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            stagger: 0.2,
          }).to(
            [".greenContent p", ".greenContent button"],
            {
              y: 0,
              autoAlpha: 1,
            },
            "-=0.5"
          );
        },
      },
    });
  });

  return (
    <section
      ref={introRef}
      className="bg-white overflow-hidden lg:min-h-screen relative z-10"
    >
      <div className="container mx-auto px-4 md:h-full">
        <section className="lg:px-0">
          <div className="bg-white scrollingSection relative h-[100vh]">
            <div className="mx-auto  ">
              <GreenTodayContent
                shouldReverse={true}
                title1="Green Today,"
                title2={"Greener"}
                title={"Tomorrow!"}
                description={`Ontegra is committed to a sustainable future, implementing eco-friendly practices and aiming for net-zero carbon footprint by 2030.`}
                imageUrl="/todayGreen.png"
                buttonTitle="Discover How"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GreenSection;
