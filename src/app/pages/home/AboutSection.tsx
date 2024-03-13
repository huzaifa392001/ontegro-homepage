"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

const AboutSection = () => {
  const introRef = useRef<HTMLDListElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const intro = introRef.current!;
    const leftText = intro.querySelector(".left-text");
    const topimg = intro.querySelector(".back-img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        // scroller: ".absolute.inset-0",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.add(
      gsap.fromTo(
        leftText,
        { x: "-130%", opacity: 0.5 },
        {
          opacity: 1,
          x: 0,
          ease: "expo.inOut",
          duration: 1,
        }
      ),
      "fadeImg"
    ).add(
      gsap.fromTo(
        topimg,
        { x: "100%", opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          ease: "expo.inOut",
          duration: 1,
        }
      ),
      "fadeImg"
    );
  }, []);

  return (
    <section
      ref={introRef}
      className="bg-white overflow-hidden lg:min-h-screen relative z-10"
    >
      <div className="container mx-auto px-4 md:h-full">
        <div className="flex flex-col items-center md:flex-row md:h-full">
          <div className="md:w-2/3 max-md:pb-0 pt-28 md:h-full box">
            <div className="flex left-text flex-col justify-center md:h-full">
              <h2 className="title font-acumin font-bold text-xl md:text-2xl lg:text-4xl xl:text-[40px] xl:leading-[54px] text-[#82848C] mb-11">
                Ontegra is redefining the landscape of{" "}
                <strong>facilities management</strong> by integrating
                cutting-edge <strong>artificial intelligence</strong> to provide
                smarter, more efficient service solutions that are prepared for
                the challenges of <a className="text-primary">tomorrow</a>
              </h2>

              <div>
                <Link
                  href="/"
                  className="button inline-flex items-center py-2 px-7 border-4 border-primary divide-solid rounded-full font-acumin font-semibold text-base lg:text-xl xl:text-3xl text-primary space-x-4 md:space-x-8 bg-transparent hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <span>Discover How</span>
                  <IoIosArrowRoundForward size={40} />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-2/6 back-img h-auto lg:pt-28 self-end">
            <Image
              src="/woman.png"
              alt="woman"
              width={400}
              height="831"
              className=" lg:h-auto h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
