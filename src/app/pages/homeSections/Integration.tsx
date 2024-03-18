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
    gsap.set(".integrationSec .content h1", { scale: 2, autoAlpha: 0 });
    gsap.set(".integrationSec .imgCont img", { xPercent: -100, autoAlpha: 0 });
    gsap.set(
      [".integrationSec .content p", ".integrationSec .content button"],
      { autoAlpha: 0 }
    );
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
          tl.to(".integrationSec .content h1", {
            scale: 1,
            autoAlpha: 1,
            stagger: 0.5,
          })
            .to(
              [".integrationSec .content p", ".integrationSec .content button"],
              {
                autoAlpha: 1,
                stagger: 0.1,
              },
              "-=0.5"
            )
            .to(
              ".integrationSec .imgCont img",
              {
                xPercent: 0,
                autoAlpha: 1,
              },
              "<"
            );
        },
        onLeave: () => {
          tl.to(".integrationSec > *", {
            yPercent: -100,
            ease: "none",
          });
        },
        onEnterBack: () => {
          tl.to(".integrationSec > *", {
            yPercent: 0,
            ease: "none",
          });
        },
        onLeaveBack: () => {
          tl.to(".integrationSec .content h1", {
            scale: 1.5,
            autoAlpha: 0,
            stagger: 0.1,
          })
            .to(
              [".integrationSec .content p", ".integrationSec .content button"],
              {
                autoAlpha: 0,
                stagger: 0.1,
              },
              "-=0.5"
            )
            .to(
              ".integrationSec .imgCont img",
              {
                xPercent: -110,
              },
              "<"
            );
        },
      },
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
            <div className="mx-auto flex items-center justify-center">
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
