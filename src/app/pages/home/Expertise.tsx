"use client";
//ts-nocheck

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Expertise = () => {
  return (
    <section id="expertise" className="h-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-center gap-[50px] flex-col h-full pt-28 pb-12 ">
          <div className="text-wrapper">
            <h2 className="font-montserrat font-extrabold italic uppercase text-[53px] leading-[54px] text-[#3E3E3E]">
              A Spectrum of <span className="text-primary">Expertise</span>
            </h2>
            <h3 className="font-montserrat font-medium text-[29px] leading-[42px] text-[#7C7C7C]">
              Our Comprehensive FM Services
            </h3>
          </div>

          <div className="relative pl-6 before:absolute before:inset-y-0 before:right-full before:w-screen before:bg-white before:z-50">
            <Swiper
              // slidesPerView={4}
              spaceBetween={50}
              centeredSlides={false}
              loop={true}
              navigation
              modules={[Navigation]}
              className="!overflow-visible experts-slider"
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
                // 1200: {
                //   width: 1024,
                //   slidesPerView: 5,
                // },
              }}
            >
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={`human ${isActive ? "scale-115" : ""}`}>
                    <div
                      className={`border divide-solid  border-[#414141] mb-10`}
                    >
                      <Image
                        className={`${
                          isActive ? "scale-110" : ""
                        } lg:!w-[270px] !w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/Technician.png"
                        alt="Hard Services"
                        width={280}
                        height={392}
                      />
                    </div>
                    <h4
                      className={`font-montserrat font-semibold text-[22px] leading-[27px] uppercase ${
                        isActive ? "text-[#434343]" : "text-white]"
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
                    <div className="border divide-solid border-[#414141] mb-10">
                      <Image
                        className={`${
                          isActive ? "scale-110" : ""
                        } lg:!w-[270px] !w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/Cleaner.png"
                        alt="Soft Services"
                        height="394"
                        width={280}
                      />
                    </div>
                    <h4
                      className={`font-montserrat font-semibold text-[22px] leading-[27px] uppercase ${
                        isActive ? "text-white" : "text-[#434343]"
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
                    <div className="border divide-solid border-[#414141] mb-10">
                      <Image
                        className={`${
                          isActive ? "scale-110" : ""
                        } lg:!w-[270px] !w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/security_BW.png"
                        alt="Security Services"
                        height="394"
                        width={280}
                      />
                    </div>

                    <h4
                      className={`font-montserrat font-semibold text-[22px] leading-[27px] uppercase ${
                        isActive ? "text-white" : "text-[#434343]"
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
                    <div className="border divide-solid border-[#414141] mb-10">
                      <Image
                        className={`${
                          isActive ? "scale-110" : ""
                        } lg:!w-[270px] !w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/rope-access_BW.png"
                        alt="Specialized Services"
                        height="394"
                        width={280}
                      />
                    </div>

                    <h4
                      className={`font-montserrat font-semibold text-[22px] leading-[27px] uppercase ${
                        isActive ? "text-white" : "text-[#434343]"
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
                    <div className="border divide-solid border-[#414141] mb-10">
                      <Image
                        className={`${
                          isActive ? "scale-110" : ""
                        } lg:!w-[270px] !w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/Energy-Management.png"
                        alt="Energy Management"
                        height="394"
                        width={280}
                      />
                    </div>

                    <h4
                      className={`font-montserrat font-semibold text-[22px] leading-[27px] uppercase ${
                        isActive ? "text-white" : "text-[#434343]"
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
                    <div className="border divide-solid border-[#414141] mb-10">
                      <Image
                        className={`${
                          isActive ? "scale-110" : ""
                        } lg:!w-[270px] !w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/Cleaner.png"
                        alt="Soft Services"
                        height="394"
                        width={280}
                      />
                    </div>
                    <h4
                      className={`font-montserrat font-semibold text-[22px] leading-[27px] uppercase ${
                        isActive ? "text-white" : "text-[#434343]"
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
                    <div className="border divide-solid border-[#414141] mb-10">
                      <Image
                        className={`${
                          isActive ? "scale-110" : ""
                        } lg:!w-[270px] !w-[318px] !3xl:w-[318px] !h-auto `}
                        src="/security_BW.png"
                        alt="Security Services"
                        height="394"
                        width={280}
                      />
                    </div>

                    <h4
                      className={`font-montserrat font-semibold text-[22px] leading-[27px] uppercase ${
                        isActive ? "text-white" : "text-[#434343]"
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
