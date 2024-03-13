"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";

const IntroSection2 = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = introRef.current!;
    const firstImg = intro.querySelector(".backBgImg");
    const otherText = intro.querySelector(".fadingtext");
    const imagetwo = intro.querySelector(".imag-two");

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagetwo,
        once: true,
        start: "top center",
      },
    });

    tl.add(
      gsap.fromTo(
        firstImg,
        { opacity: 1 },
        { opacity: 0, ease: "expo.inOut", duration: 1, y: -100 }
      ),
      "fadeImg"
    )
      .add(
        gsap.fromTo(
          imagetwo,
          { scale: 1 },
          { scale: 1.3, y: 150, ease: "expo.inOut", duration: 1 }
        ),
        "fadeImg"
      )
      .fromTo(
        otherText,
        { opacity: 0 },
        { opacity: 1, ease: "expo.inOut", duration: 1 },
        "+=0.5"
      )
      .to(coverRef.current, {
        opacity: 1,
      });

    tl.add(
      gsap.fromTo(
        textRef.current,
        { width: 0 },
        {
          width: 350,
          ease: "expo.inOut",
          duration: 2,
        }
      ),
      "typewriter"
    ).add(
      gsap.to(coverRef.current, {
        x: 350,
        opacity: 1,
        display: "none",
        ease: "expo.inOut",
        duration: 2,
      }),
      "typewriter"
    );
  }, []);

  return (
    <section
      id="intro"
      className="min-h-[100vh] max-w-[1440px] mx-auto relative"
      ref={introRef}
    >
      <div className="h-full w-full overflow-hidden">
        <div className=" backBgImg">
          <Image
            className="w-full object-cover"
            src="/Future-Building-Enhanced.png"
            alt="defining-feature-today"
            fill={true}
          />
        </div>
        <div className="max-w-[1440px] mx-auto">
          <Image
            className="w-full imag-two object-cover"
            src="/Future-Building-Enhanced001.png"
            alt="defining-feature-today"
            fill={true}
          />
        </div>
      </div>
      <div className="container absolute top-1/2 left-0 max-w-[1440px] px-5 mx-auto">
        <h3 className="text-[90px] fadingtext leading-[97%] lg:w-[688px] font-montserrat font-[600] ">
          DEFINING TOMORROW’S STANDARDS
        </h3>
        <div className="relative " id="typewriter">
          <p
            id="typewriterTrigger"
            ref={textRef}
            className="text-[90px] text-[#278CB3] overflow-hidden leading-[97%] textcover font-montserrat font-[600] "
          >
            TODAY.
          </p>
          <span className="textriter" ref={coverRef}></span>
        </div>
      </div>
    </section>
  );
};

export default IntroSection2;
