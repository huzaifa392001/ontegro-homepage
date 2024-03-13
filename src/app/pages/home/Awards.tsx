"use client";
//ts-nocheck

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Link from "next/link";

const AwardSection = () => {
  const awardRef = useRef<HTMLDListElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const awards = awardRef.current!;
    const topText = awards.querySelector(".top-text");
    const bottomText = awards.querySelector(".bottom-text");
    const bottomSlide = awards.querySelector(".bottom-slide");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: awardRef.current,
        // scroller: ".absolute.inset-0",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.add(
      gsap.fromTo(
        topText,
        { y: "250%", opacity: 0.5 },
        {
          opacity: 1,
          y: 0,
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
            y: 0,
            opacity: 1,
            ease: "expo.inOut",
            duration: 3,
          }
        ),
        "fadeImg"
      )
      .add(
        gsap.fromTo(
          bottomSlide,
          { y: "300%", opacity: 0.5 },
          {
            y: 0,
            opacity: 1,
            ease: "expo.inOut",
            duration: 4,
          }
        ),
        "fadeImg"
      );
  }, []);

  return (
    <section
      ref={awardRef}
      id="awards"
      className="bg-black lg:min-h-screen overflow-hidden"
    >
      <div className="h-full w-full relative">
        <div className="backBgImg absolute inset-0">
          <Image
            src="/Award-Background.png"
            alt=""
            className="back-img block object-cover h-full w-full pointer-events-none"
            fill={true}
            priority={true}
          />
        </div>
        <div className="frontBgImg absolute inset-x-0 bottom-0">
          <Image
            src="/Foreground-Award.png"
            alt=""
            className="front-img block w-full h-auto pointer-events-none"
            priority={true}
            fill={false}
            width="1920"
            height="357"
          />
        </div>

        <div className="relative z-30 w-full h-full py-28">
          <div className="container mx-auto px-4 h-full">
            <div className="flex flex-col md:flex-row justify-center items-center h-full">
              <div className="md:w-1/2">
                <h2 className="top-text font-montserrat font-bold text-3xl md:text-5xl lg:text-7xl xl:text-[100px] xl:leading-[113px] 2xl:text-[143px] 2xl:leading-[153px] text-[#D3D3D3] -tracking-[1.72px] text-white mb-11">
                  Excellence Recognized
                </h2>

                <div className="bottom-text font-montserrat font-bold text-lg md:text-[25px] md:leading-[42px] text-[#D3D3D3] -tracking-[0.3px]">
                  Our esteemed clientele is a testament to our trusted,
                  high-quality service. See the diverse portfolio that makes us
                  a leader in FM
                </div>
              </div>

              <div className="md:w-1/2 h-full">
                <div className="bottom-slide">
                  <Swiper
                    direction={"vertical"}
                    autoHeight={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    autoplay={{ delay: 5000 }}
                    loop={false}
                    speed={600}
                    modules={[Mousewheel, Autoplay]}
                    className="awardsSlider h-full !overflow-visible !py-28"
                  >
                    <SwiperSlide>
                      <Image
                        src="/FMCompany2022.png"
                        alt=""
                        fill={false}
                        width="592"
                        height="241"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/FMCompany2022.png"
                        alt=""
                        fill={false}
                        width="592"
                        height="241"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/FMCompany2022.png"
                        alt=""
                        fill={false}
                        width="592"
                        height="241"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex justify-center items-center h-full">
                        <Link
                          href="#"
                          className="font-montserrat font-bold italic text-lg md:text-[25px] md:leading-[30px} text-black py-3 px-10 rounded-full bg-[#F7BE2E]"
                        >
                          See Our Awards
                        </Link>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
