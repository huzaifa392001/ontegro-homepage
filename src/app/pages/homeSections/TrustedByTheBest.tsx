import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function TrustedByTheBest() {
  const animationRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const intro = animationRef.current!;
    const team1 = intro.querySelector(".team1");
    const team2 = intro.querySelector(".team2");
    const trusted = intro.querySelector(".trusted-text");
    const team3 = intro.querySelector(".team3");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
    tl.fromTo(
      trusted,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    )
      .fromTo(
        team1,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(
        team2,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(
        team3,
        {
          y: -100,
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
      className="bg-[#fff] relative pt-40 md:min-h-screen h-full flex justify-center flex-col"
    >
      <div className="container mx-auto px-4 self-center">
        <div className="flex xl:flex-row flex-col justify-center gap-[100px] items-center">
          <h1 className="3xl:text-[105px] 2xl:text-[90px]  xl:text-[95px] md:text-[60px] text-[45px] xl:w-[577px] trusted-text leading-[100%] font-montserrat font-bold text-black">
            Trusted by the <span className="text-[#278CB3]">Best</span>
          </h1>
          <div className="flex items-stretch gap-[32px] justify-center md:flex-nowrap flex-wrap">
            <div className="team1 w-[250px] flex flex-col py-[50px] rounded-[10px]  items-center justify-center bg-[#000000]">
              <Image
                src="/experiance.png"
                alt="future building"
                width={88}
                height={82}
              />

              <h6 className="lg:text-[20px] font-montserrat text-[20px]  md:text-[15px] text-center lg:w-[55%] text-[#FFF] pt-[32px]">
                Over 20 Years
                of Experience
              </h6>
            </div>



            <div className="team2 w-[250px] flex flex-col py-[50px] rounded-[10px]  items-center justify-center bg-[#000000]">
              <Image
                src="/qualified.png"
                alt="future building"
                width={75}
                height={61}
              />

              <h6 className="lg:text-[20px] font-montserrat text-[20px]  md:text-[15px] lg:w-[60%] text-center text-[#FFF] pt-[32px]">
                2000+
                Qualified Staff
              </h6>
            </div>

            <div className="team3 w-[250px] flex flex-col py-[50px] rounded-[10px]  items-center justify-center bg-[#000000]">
              <Image
                src="/manage.png"
                alt="future building"
                width={59}
                height={62}
              />

              <h6 className="lg:text-[20px] font-montserrat text-[20px]  md:text-[15px] lg:w-[60%] max-sm:px-2 text-center text-[#FFF] pt-[32px]">
                25,000+
                Managed Units
              </h6>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-[#D0D0D0] py-5 mt-[350px] mb-[53px]">
        <div className="logo-slider !pt-0 ">
          <div className="logo-slide-track">
            <div className="logo-slide">
              <Image src="/trushLogo1.png" height="16" width="82" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo2.png" height="71" width="128" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo3.png" height="47" width="48" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo4.png" height="59" width="59" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo5.png" height="56" width="99" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo6.png" height="57" width="136" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo7.png" height="58" width="82" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo8.png" height="71" width="128" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo1.png" height="16" width="82" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo2.png" height="71" width="128" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo3.png" height="47" width="48" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo4.png" height="59" width="59" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo5.png" height="56" width="99" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo6.png" height="57" width="136" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo7.png" height="58" width="82" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/trushLogo8.png" height="71" width="128" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedByTheBest;
