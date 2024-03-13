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
      className="bg-[#000000] relative pt-40 md:min-h-screen h-full flex justify-center flex-col"
    >
      <div className="container mx-auto px-4 self-center">
        <div className="flex xl:flex-row flex-col justify-center gap-[100px] items-center">
          <h1 className="3xl:text-[143px] 2xl:text-[110px]  xl:text-[95px] md:text-[60px] text-[45px] xl:w-[577px] trusted-text leading-[100%] font-montserrat font-bold text-white">
            Trusted by the <span className="text-[#278CB3]">Best</span>
          </h1>
          <div className="flex items-stretch gap-4 justify-center md:flex-nowrap flex-wrap">
            <div className="team1 w-[250px] flex flex-col  py-[70px] items-center justify-center bg-gradient-linear bg-gradient-to-b from-[#000000] via-[#292929] via-[#292929] via-[#292929] via-[#292929] via-[#292929] to-[#000000]">
              <Image
                src="/user.png"
                alt="future building"
                width={56}
                height={56}
              />
              <div className="font-montserrat py-1 my-[54px] rounded-[20px] px-4 bg-[#278CB3] font-medium text-[20px] text-white">
                Servicing
              </div>
              <h6 className="font-montserrat font-medium text-[16px] text-[#268CB3]">
                More than
              </h6>
              <h5 className="md:text-[59px] text-[40px]  text-white font-montserrat font-bold">
                100
              </h5>
              <h6 className="md:text-[30px] text-[25px] text-[#4A4A4A]">
                Clients
              </h6>
            </div>
            <div className="team2 w-[250px] flex flex-col py-[70px] items-center justify-center bg-gradient-linear bg-gradient-to-b from-[#000000] via-[#292929] via-[#292929] via-[#292929] via-[#292929] via-[#292929] to-[#000000]">
              <Image
                src="/hierarchy.png"
                alt="future building"
                width={56}
                height={56}
              />
              <div className="font-montserrat py-1 my-[54px] rounded-[20px] px-4 bg-[#278CB3] font-medium text-[20px] text-white">
                Portoflio
              </div>
              <h6 className="font-montserrat font-medium text-[16px] text-[#268CB3]">
                Of more than
              </h6>
              <h5 className="md:text-[59px] text-[40px]  text-white font-montserrat font-bold">
                25k
              </h5>
              <h6 className="md:text-[30px] text-[25px] text-[#4A4A4A]">
                Units
              </h6>
            </div>
            <div className="team3 w-[250px] flex flex-col  py-[70px] items-center justify-center bg-gradient-linear bg-gradient-to-b from-[#000000] via-[#292929] via-[#292929] via-[#292929] via-[#292929] via-[#292929] to-[#000000]">
              <Image
                src="/building.png"
                alt="future building"
                width={56}
                height={56}
              />
              <div className="font-montserrat py-1 my-[54px] rounded-[20px] px-4 bg-[#278CB3] font-medium text-[20px] text-white">
                Spread
              </div>
              <h6 className="font-montserrat font-medium text-[16px] text-[#268CB3]">
                Over area of
              </h6>
              <h5 className="md:text-[59px] text-[40px]  text-white font-montserrat font-bold">
                29M
              </h5>
              <h6 className="md:text-[30px] text-[25px] text-[#4A4A4A]">
                Sq. Feet
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#262626] mt-auto">
        <div className="logo-slider">
          <div className="logo-slide-track">
            <div className="logo-slide">
              <Image src="/Abu-Dhabi.png" height="80" width="200" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/DHL.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/Abu-Dhabi.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/Fedex.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/FMCompany2022.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/Abu-Dhabi.png" height="80" width="200" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/DHL.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/Abu-Dhabi.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/Fedex.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/FMCompany2022.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/Abu-Dhabi.png" height="80" width="200" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/DHL.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/Abu-Dhabi.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/Fedex.png" height="100" width="250" alt="" />
            </div>
            <div className="logo-slide">
              <Image src="/FMCompany2022.png" height="100" width="250" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedByTheBest;
