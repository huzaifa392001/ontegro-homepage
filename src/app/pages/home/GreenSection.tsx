"use client";
//ts-nocheck

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Link from "next/link";

const GreenSection = () => {
  const greenRef = useRef<HTMLDListElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const green = greenRef.current!;
    const topText = green.querySelector(".top-text");
    const bottomText = green.querySelector(".btm-text");
    const rightText = green.querySelector(".right-text");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: greenRef.current,
        // scroller: ".absolute.inset-0",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.add(
      gsap.fromTo(
        topText,
        { y: "300%", opacity: 0.5 },
        {
          opacity: 1,
          y: window.innerWidth <= 575 ? 0 : 150,
          ease: "expo.inOut",
          duration: 2,
        }
      ),
      "fadeImg"
    )
      .add(
        gsap.fromTo(
          bottomText,
          { y: "300%", opacity: 0.5 },
          {
            y: window.innerWidth <= 575 ? 0 : 200,
            opacity: 1,
            ease: "expo.inOut",
            duration: 3,
          }
        ),
        "fadeImg"
      )
      .add(
        gsap.fromTo(
          rightText,
          { y: "100%", opacity: 0.5 },
          {
            y: 0,
            opacity: 1,
            ease: "expo.inOut",
            duration: 3.5,
          }
        ),
        "fadeImg"
      );
  }, []);

  return (
    <section
      ref={greenRef}
      id="greenSection"
      className="lg:min-h-screen min-h-[70vh] lg:pt-[100px] relative"
    >
      <div className="h-full w-full absolute inset-0 overflow-hidden">
        <div className="greenBackBgImg absolute inset-0">
          <Image
            src="/BackgroundBlack.png"
            alt=""
            className="back-img block object-cover h-full w-full pointer-events-none"
            fill={true}
            priority={true}
          />
        </div>
        <div className="greenFrontBgImg absolute left-0 right-0 bottom-0">
          <Image
            src="/Foreground.png"
            alt=""
            className="front-img block w-full h-auto pointer-events-none"
            priority={true}
            fill={false}
            width="2101"
            height="686"
          />
        </div>

        <div className="absolute z-30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full py-28">
          <div className="container flex flex-col mx-auto px-4">
            <div className="top-text font-montserrat translate-y-1/2 text-base sm:text-2xl md:text-3xl lg:text-[36px] 2xl:text-[46px] lg:leading-[66px] 2xl:leading-[86px] uppercase font-normal text-center text-white tracking-[6.58px]">
              Green Today
            </div>
            <h2 className="btm-text font-montserrat translate-y-[50%] font-extrabold italic text-center text-[#4CB209] -tracking-[2.86px] text-5xl sm:text-6xl lg:text-8xl xl:text-7xl 2xl:text-[143px] 2xl:leading-[132px] mb-5">
              Greener <br />
              Tomorrow
            </h2>

            <div className="md:max-w-80 md:self-end text-center md:right-text">
              <div className="font-montserrat font-normal text-base xl:text-xl 2xl:text-[25px] 2xl:leading-[42px] text-white mb-4 md:mb-12">
                Ontegra is committed to a sustainable future, implementing
                eco-friendly practices and aiming for{" "}
                <span className="text-[#4BB209]">net-zero</span> carbon
                footprint by <span className="text-[#4BB209]">2030.</span>
              </div>

              <Link
                href="#"
                className="button inline-block py-[10px] px-[30px] border-2 border-white hover:border-[#4BB209] divide-solid rounded-full font-montserrat font-bold text-base xl:text-lg 2xl:text-[21px] 2xl:leading-[25px] text-[#4BB209] bg-transparent hover:bg-[#4BB209] hover:text-white transition-all duration-200"
              >
                <span>Our Green Mission</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
