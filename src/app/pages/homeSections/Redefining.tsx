"use client";

import HomePageContent from "@/app/components/reuseable/PageContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

const Redefining = () => {
  const introRef = useRef<HTMLDListElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top top+=20%",
          toggleActions: "play none none reverse",
        },
      });
      tl.from(".redefiningSec .content > *", {
        xPercent: -100,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
        ease: "expo.out",
      }).from(
        ".redefiningSec .imgCont img",
        {
          xPercent: 100,
          duration: 1,
          autoAlpha: 0,
          ease: "expo.out",
        },
        "-=0.5"
      );
    },
    {
      scope: introRef,
    }
  );

  return (
    <section
      ref={introRef}
      className="bg-white overflow-hidden lg:min-h-screen relative z-10 redefiningSec"
    >
      <div className="container mx-auto px-4 md:h-full">
        <section className="lg:px-0">
          <div className="bg-white scrollingSection relative">
            <div className="mx-auto ">
              <HomePageContent
                textColorh1={"#000"}
                textColorp={"#278CB3"}
                title1={"Redefining"}
                title="the Landscape of Facilities Management"
                description="By integrating cutting-edge artificial intelligence to provide smarter, more efficient service solutions that are prepared for the challenges of tomorrow"
                imageUrl="/RedefiningWoman.png"
                shouldReverse={true}
                buttonTitle="Discover How"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Redefining;
