import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
const Alegra = "/alegra.png";

function Team() {
  const animationRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const intro = animationRef.current!;
    const team1 = intro.querySelector(".team1");
    const team2 = intro.querySelector(".team2");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
    tl.fromTo(
      team1,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    ).fromTo(
      team2,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  }, []);
  return (
    <div
      ref={animationRef}
      className="bg-black relative z-30 min-h-[100svh] flex items-center justify-center py-20 lg:pt-0"
    >
      <div className="container mx-auto pt-28 lg:px-5 gap-5 flex-col lg:flex-row px-4 flex items-strech justify-center">
        <div className="team1 w-full">
          <div className="bg-[#101010]  relative z-10 pt-[5px] flex items-center justify-center">
            <Image
              src="/Alegra.png"
              alt="future building"
              className="h-auto  "
              width={390}
              height={390}
            />
            <span className="absolute team-bg w-[345px] top-[10px] left-[50%] translate-x-[-50%] h-[345px] bg-[#ffff] z-[-1] opacity-10 rounded-full"></span>
          </div>
          <div className="flex flex-col items-center justify-strech">
            <h4 className="text-white text-center mt-[37px] mb-[10px] font-montserrat font-bold text-lg md:text-[40px] md:leading-[45px]">
              Alegra
            </h4>
            <p className="text-[#5D5D5D] text-center font-montserrat font-medium text-sm md:text-[20px]">
              Your 24x7 AI Concierge
            </p>
            <div className="font-montserrat py-1 rounded-[20px] mt-[20px] min-[1820px]:mt-[38px] px-4 bg-[#278CB3] font-medium text-[20px] text-white">
              Meet Alegra
            </div>
          </div>
        </div>
        <div className="w-full team2">
          <div className="bg-[#101010] relative z-10 flex items-center justify-center pt-[10px]">
            <Image
              src="/TechiMain.png"
              alt="future building"
              className="z-10 h-auto"
              width={446}
              height={439}
            />
            <span className="absolute team-bg w-[345px] top-[10px] left-[50%] translate-x-[-50%] h-[345px] bg-[#ffff] z-[-1] opacity-10 rounded-full"></span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white text-center mt-[37px] mb-[10px] font-montserrat font-bold text-lg md:text-[40px] md:leading-[45px]">
              Techi
            </h4>
            <p className="text-[#5D5D5D] text-center font-montserrat font-medium text-sm md:text-[20px]">
              Our AI Expert in Excellence
            </p>
            <div className="font-montserrat py-1 mt-[20px] min-[1820px]:mt-[38px] rounded-[20px] px-4 bg-[#278CB3] font-medium text-[20px] text-white">
              Meet Techi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
