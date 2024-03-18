"use client";
//ts-nocheck

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Expertise = () => {
  const introRef = useRef<HTMLDListElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(
    () => {
      gsap.set(".text-wrapper", {
        yPercent: 100,
        autoAlpha: 0,
      });
      gsap.set("#expertSlider .swiper-slide", {
        yPercent: 100,
        autoAlpha: 0,
      });
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
            tl.to(".text-wrapper", {
              yPercent: 0,
              autoAlpha: 1,
            }).to(
              "#expertSlider .swiper-slide",
              {
                yPercent: 0,
                autoAlpha: 1,
                stagger: 0.1,
              },
              "-=0.5"
            );
          },
          onLeave: () => {
            tl.to(".text-wrapper", {
              yPercent: -100,
              autoAlpha: 0,
            }).to(
              "#expertSlider .swiper-slide",
              {
                yPercent: -100,
                autoAlpha: 0,
                stagger: 0.1,
              },
              "-=0.5"
            );
          },
          onEnterBack: () => {
            tl.to(".text-wrapper", {
              yPercent: 0,
              autoAlpha: 1,
            }).to(
              "#expertSlider .swiper-slide",
              {
                yPercent: 0,
                autoAlpha: 1,
                stagger: 0.1,
              },
              "-=0.5"
            );
          },
          onLeaveBack: () => {
            tl.to(".text-wrapper", {
              yPercent: 100,
              autoAlpha: 0,
            }).to(
              "#expertSlider .swiper-slide",
              {
                yPercent: 100,
                autoAlpha: 0,
                stagger: 0.1,
              },
              "-=0.5"
            );
          },
        },
      });
    },
    {
      scope: introRef,
    }
  );
  return (
    <section
      ref={introRef}
      id="expertise"
      className="h-full overflow-hidden bg-white"
    >
      <div className="container  px-4 max-sm:px-0 h-full">
        <div className="flex justify-center gap-[100px] flex-col h-full pt-28 pb-12 ">
          <div className="text-wrapper">
            <h2 className="font-montserrat font-extrabold italic uppercase text-[53px] leading-[54px] text-[#3E3E3E]">
              A Spectrum of <span className="text-primary">Expertise</span>
            </h2>
            <h3 className="font-montserrat font-medium text-[29px] leading-[42px] text-[#7C7C7C]">
              Our Comprehensive FM Services
            </h3>
          </div>

          <div className="relative pl-14 before:absolute before:inset-y-0 before:right-full before:w-screen before:bg-white before:z-50">
            <Swiper
              // slidesPerView={40}
              spaceBetween={0}
              centeredSlides={false}
              loop={true}
              navigation
              modules={[Navigation]}
              className="!overflow-visible experts-slider "
              id="expertSlider"
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                // when window width is >= 1024px
                1024: {
                  width: 1024,
                  slidesPerView: 4,
                },
                // when window width is >= 1200px
                1200: {
                  width: 1200,
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={`human ${isActive ? "scale-115" : ""}`}>
                    <div className={` mb-10`}>
                      <Image
                        className={`${
                          isActive
                            ? "scale-110"
                            : "filter mix-blend-darken brightness-50"
                        } lg:!w-[330px] w-[318px]`}
                        src="/Technician.png"
                        alt="Hard Services"
                        width={280}
                        height={392}
                      />
                    </div>
                    <h4
                      className={`font-montserrat leading-[27px] uppercase ${
                        isActive
                          ? "text-[#000000] font-bold text-[28px]"
                          : "text-[#434343] font-semibold text-[22px]"
                      }`}
                    >
                      Hard Services
                    </h4>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={`human ${isActive ? "scale-115" : ""}`}>
                    <div className=" mb-10">
                      <Image
                        className={`${
                          isActive
                            ? "scale-110"
                            : "filter mix-blend-darken brightness-50"
                        } lg:!w-[330px] w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/Cleaner.png"
                        alt="Soft Services"
                        height="394"
                        width={280}
                      />
                    </div>
                    <h4
                      className={`font-montserrat  leading-[27px] uppercase ${
                        isActive
                          ? "text-[#000000] font-bold text-[28px]"
                          : "text-[#434343] font-semibold text-[22px]"
                      }`}
                    >
                      Soft Services
                    </h4>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={`human ${isActive ? "scale-115" : ""}`}>
                    <div className="mb-10">
                      <Image
                        className={`${
                          isActive
                            ? "scale-110"
                            : "filter mix-blend-darken brightness-50"
                        } lg:!w-[330px] w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/security_BW.png"
                        alt="Security Services"
                        height="394"
                        width={280}
                      />
                    </div>

                    <h4
                      className={`font-montserrat  leading-[27px] uppercase ${
                        isActive
                          ? "text-[#000000] font-bold text-[28px]"
                          : "text-[#434343] font-semibold text-[22px]"
                      }`}
                    >
                      Security Services
                    </h4>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={`human ${isActive ? "scale-115" : ""}`}>
                    <div className="mb-10">
                      <Image
                        className={`${
                          isActive
                            ? "scale-110"
                            : "filter mix-blend-darken brightness-50"
                        } lg:!w-[330px] w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/rope-access_BW.png"
                        alt="Specialized Services"
                        height="394"
                        width={280}
                      />
                    </div>

                    <h4
                      className={`font-montserrat  leading-[27px] uppercase ${
                        isActive
                          ? "text-[#000000] font-bold text-[28px]"
                          : "text-[#434343] font-semibold text-[22px]"
                      }`}
                    >
                      Specialized Services
                    </h4>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={`human ${isActive ? "scale-115" : ""}`}>
                    <div className="mb-10">
                      <Image
                        className={`${
                          isActive
                            ? "scale-110"
                            : "filter mix-blend-darken brightness-50"
                        } lg:!w-[330px] w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/Energy-Management.png"
                        alt="Energy Management"
                        height="394"
                        width={280}
                      />
                    </div>

                    <h4
                      className={`font-montserrat  leading-[27px] uppercase ${
                        isActive
                          ? "text-[#000000] font-bold text-[28px]"
                          : "text-[#434343] font-semibold text-[22px]"
                      }`}
                    >
                      Energy Management
                    </h4>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={`human ${isActive ? "scale-115" : ""}`}>
                    <div className="mb-10">
                      <Image
                        className={`${
                          isActive
                            ? "scale-110"
                            : "filter mix-blend-darken brightness-50"
                        } lg:!w-[330px] w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/Cleaner.png"
                        alt="Soft Services"
                        height="394"
                        width={280}
                      />
                    </div>
                    <h4
                      className={`font-montserrat  leading-[27px] uppercase ${
                        isActive
                          ? "text-[#000000] font-bold text-[28px]"
                          : "text-[#434343] font-semibold text-[22px]"
                      }`}
                    >
                      Soft Services
                    </h4>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={`human ${isActive ? "scale-115" : ""}`}>
                    <div className="mb-10">
                      <Image
                        className={`${
                          isActive
                            ? "scale-110"
                            : "filter mix-blend-darken brightness-50"
                        } lg:!w-[330px] w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/security_BW.png"
                        alt="Security Services"
                        height="394"
                        width={280}
                      />
                    </div>

                    <h4
                      className={`font-montserrat  leading-[27px] uppercase ${
                        isActive
                          ? "text-[#000000] font-bold text-[28px]"
                          : "text-[#434343] font-semibold text-[22px]"
                      }`}
                    >
                      Security Services
                    </h4>
                  </div>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
