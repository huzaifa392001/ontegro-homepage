"use client";
import HomePageContent from "@/app/components/reuseable/PageContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

const Integration = () => {
  const introRef = useRef<HTMLDListElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: "top top+=20%",
        toggleActions: "play none none reverse",
      },
    });
    tl.from(".integrationSec .imgCont img", {
      xPercent: -100,
      autoAlpha: 0,
      ease: "expo.out",
      duration: 1,
    })
      .from(
        ".integrationSec .content h1",
        {
          scale: 1.5,
          autoAlpha: 0,
          stagger: 0.2,
          duration: 1,
          ease: "expo.out",
        },
        "-=0.5"
      )
      .from([".integrationSec .content p", ".integrationSec .content button"], {
        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
        ease: "expo.out",
      });
  });

  return (
    <section
      ref={introRef}
      className="bg-white overflow-hidden lg:min-h-screen relative z-10 pb-28 integrationSec"
    >
      <div className="container mx-auto px-4 md:h-full">
        <section className="lg:px-0">
          <div className="bg-white scrollingSection relative">
            <div className="mx-auto pt-40">
              <HomePageContent
                textColorh1={"#278CB3"}
                textColorp={"#000"}
                title1={"Integrating "}
                title2={"Artificial Intelligence"}
                title="in Core FM Operations"
                description="Ontegra, more than a facilities management company, is your expert in proactive asset care. With roots stretching back to 2002 and the backing of Deyaar, we possess a deep understanding of customer needs. Our approach transcends traditional FM services, as we employ global best practices to not only manage but also enhance and extend the life cycle of your assets. Our capabilities have earned us the trust of a diverse clientele, managing a substantial portfolio across various industries."
                imageUrl="/AI.png"
                buttonTitle="Discover How"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Integration;
