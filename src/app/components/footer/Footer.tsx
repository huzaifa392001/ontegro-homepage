import Image from "next/image";
import React from "react";

export const Footer = (props: { isScrollable?: boolean }) => {
  return (
    <div className={`${props.isScrollable && "scrollingSection"}`}>
      <div className=" pt-16 pb-8 md:flex min-h-screen flex items-center justify-center  px-5 bg-[#000105]">
        <div className="container mx-auto ">
          <Image
            width={140}
            height={140}
            src="/footer.png"
            alt=""
            className=" min-[1800px]:w-[140px] h-auto w-[80px] footer-icon"
          />
          <div className="grid grid-cols-12 gap-4 pb-16 mt-8">
            <div className="2xl:col-span-4 md:col-span-6 col-span-12 xl::flex justify-center">
              <div className="w-[90%]">
                <div className="2xl:text-[35px] min-[1800px]:text-[43px] xl:text-[36px] lg:text-30px text-[25px] text-white font-bold montserrat">
                  This is the part where you get in touch and we make amazing
                  things happen!
                </div>
                <div className="flex gap-3  mt-8">
                  <button className="text-lg md:text-[26px] md:leading-[32px] font-medium rounded-[28px] px-7 py-2 bg-[#278CB3] font-montserrat text-white">
                    Let’s Do It!
                  </button>
                </div>
              </div>
            </div>
            <div className="2xl:col-span-3 md:col-span-6 col-span-12  ps-3">
              <div>
                <h5 className="footer-head pb-3 md:mt-0 mt-4">What’s New</h5>
                <div className="mt-4 flex gap-x-2">
                  <Image
                    width={66}
                    height={66}
                    src="/footer-img-1.png"
                    alt=""
                    className="footer-img"
                  />
                  <div>
                    <h6 className="text-[15px] montserrat text-white">
                      Deyaar FM Rebrands as Ontegra
                    </h6>
                    <h6 className="text-[#278CB3] text-white text-[14px] font-montserrat">
                      5th March 2024
                    </h6>
                  </div>
                </div>
                <div className="mt-7 flex gap-x-2">
                  <Image
                    width={66}
                    height={66}
                    src="/footer-img-2.png"
                    alt=""
                    className="footer-img"
                  />
                  <div>
                    <h6 className="text-[15px] text-white font-montserrat">
                      Ontegra launches 24/7 AI Helpdesk Alegra
                    </h6>
                    <h6 className="text-[#278CB3] text-[14px] font-montserrat">
                      01 April 2024
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:col-span-2 md:col-span-6 col-span-12 ">
              <div>
                <h5 className="footer-head pb-3 2xl:mt-0 mt-4 text-white ">
                  Quick Links
                </h5>
                <h6 className="text-[15px] montserrat mt-5 text-white">
                  Stay Connected
                </h6>
                <h6 className="text-[15px] montserrat mt-6 text-white">
                  Stay Connected
                </h6>
                <h6 className="text-[15px] montserrat mt-6 text-white">
                  Stay Connected
                </h6>
                <h6 className="text-[15px] montserrat mt-6 text-white">
                  Stay Connected
                </h6>
              </div>
            </div>
            <div className="2xl:col-span-3 md:col-span-6 col-span-12">
              <div className="2xl:w-[75%]">
                <h5 className="footer-head pb-3 2xl:mt-0 mt-4 text-white">
                  Get in Touch
                </h5>
                <div className="flex items-center gap-x-3  mt-5">
                  <Image width={21} height={21} src="/calling.png" alt="" />
                  <h6 className="text-[15px] montserrat text-white">
                    800 ONTEGRA (6683472)
                  </h6>
                </div>
                <div className="flex items-center gap-x-3  mt-6">
                  <Image width={21} height={21} src="/mail.png" alt="" />
                  <h6 className="text-[15px] montserrat text-white">
                    helpdesk@ontegra.ae
                  </h6>
                </div>
                <div className="flex items-center gap-x-3  mt-6">
                  <Image width={21} height={21} src="/whatsapp.png" alt="" />
                  <h6 className="text-[15px] montserrat text-white">
                    +971 800 6683472
                  </h6>
                </div>
                <div className="flex items-center gap-x-3  mt-6">
                  <Image width={21} height={21} src="/location.png" alt="" />
                  <h6 className="text-[15px] montserrat text-white">
                    51 Tower, Business Bay Dubai, UAE
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <h6 className="text-[14px] text-white xl:text-center mt-5 montserrat">
            Copyright © 2024{" "}
            <span className="text-[#278CB3] text-white montserrat">
              Ontegra
            </span>
            . All rights reserved.
          </h6>
          <Image
            width={317}
            height={52}
            src="/footer-link.svg"
            alt=""
            className="md:float-right md:-mt-10 mt-3"
          />
        </div>
      </div>
    </div>
  );
};
