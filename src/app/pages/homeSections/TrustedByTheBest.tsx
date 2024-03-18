import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

function TrustedByTheBest() {
  const animationRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.set(".TrustMainHeading", {
      yPercent: -100,
      autoAlpha: 0,
    });
    gsap.set(".itemsRow > *", {
      y: -100,
      autoAlpha: 0,
    });
    gsap.set(".logoSliderCont", {
      autoAlpha: 0,
    });
    let tl = gsap.timeline({
      defaults: {
        duration: 1.25,
      },
      scrollTrigger: {
        trigger: animationRef.current,
        start: "top top",
        end: "bottom center",
        pin: true,
        markers: false,
        onEnter: () => {
          tl.to(".TrustMainHeading", {
            yPercent: 0,
            autoAlpha: 1,
          })
            .to(
              ".itemsRow > *",
              {
                stagger: 0.1,
                y: 0,
                autoAlpha: 1,
              },
              "-=0.25"
            )
            .to(
              ".logoSliderCont",
              {
                autoAlpha: 1,
              },
              "<"
            );
        },
        onLeave: () => {
          tl.to(".TrustMainHeading", {
            yPercent: 100,
            autoAlpha: 0,
          })
            .to(
              ".itemsRow > *",
              {
                stagger: 0.1,
                y: 100,
                autoAlpha: 0,
              },
              "-=0.25"
            )
            .to(
              ".logoSliderCont",
              {
                autoAlpha: 0,
              },
              "<"
            );
        },
        onEnterBack: () => {
          tl.to(".TrustMainHeading", {
            yPercent: 0,
            autoAlpha: 1,
          })
            .to(
              ".itemsRow > *",
              {
                stagger: 0.1,
                y: 0,
                autoAlpha: 1,
              },
              "-=0.25"
            )
            .to(
              ".logoSliderCont",
              {
                autoAlpha: 1,
              },
              "<"
            );
        },
        onLeaveBack: () => {
          tl.to(".TrustMainHeading", {
            yPercent: -100,
            autoAlpha: 0,
          })
            .to(
              ".itemsRow > *",
              {
                stagger: 0.1,
                y: -100,
                autoAlpha: 0,
              },
              "-=0.25"
            )
            .to(
              ".logoSliderCont",
              {
                autoAlpha: 1,
              },
              "<"
            );
        },
      },
    });
  });

  return (
    <div
      ref={animationRef}
      className="bg-[#fff] relative pt-40 md:min-h-screen h-full flex justify-center flex-col"
    >
      <div className="container mx-auto px-4 self-center">
        <div className="flex xl:flex-row flex-col justify-center gap-[100px] items-center">
          <h1 className="TrustMainHeading 3xl:text-[105px] 2xl:text-[90px]  xl:text-[95px] md:text-[60px] text-[45px] xl:w-[577px] trusted-text leading-[100%] font-montserrat font-bold text-black">
            Trusted by the <span className="text-[#278CB3]">Best</span>
          </h1>
          <div className="flex items-stretch gap-[32px] justify-center md:flex-nowrap flex-wrap itemsRow">
            <div className="team1 w-[250px] flex flex-col py-[50px] rounded-[10px]  items-center justify-center bg-[#000000]">
              <Image
                src="/experiance.png"
                alt="future building"
                width={88}
                height={82}
              />

              <h6 className="lg:text-[20px] font-montserrat text-[20px]  md:text-[15px] text-center lg:w-[55%] text-[#FFF] pt-[32px]">
                Over 20 Years of Experience
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
                2000+ Qualified Staff
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
                25,000+ Managed Units
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D0D0D0] py-5 mt-[350px] mb-[53px] logoSliderCont">
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
