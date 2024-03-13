"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamData from "./teamData";
import Slider from "react-slick";
import Link from "next/link";

function Carousel() {
    const [state, setState] = useState<number>(0);
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: true,
        pauseOnHover: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    autoplay: true,
                    swipe: false,
                    swipeToSlide: true,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <div className="slider-container select-none">
            <Slider {...settings}
            >
                {
                    teamData.map((item, index: number) => {
                        return <div key={index} className={`md:mx-5 select-none group !h-[688px] transition-all ease-in-out duration-500  ${state == index ? "md:!w-[480px]" : "md:!w-[200px]"} !w-[335px] me-2`} onMouseEnter={() => {
                            window.innerWidth > 768 && setState(index);
                        }}>
                            <Link href="">
                                <img src={item.path} alt="pic" className="select-none focus-visible:ring-0 !h-[688px] rounded-[29px] object-cover" />
                            </Link>
                            <div className={`select-none transform translate-y-[-100%] z-10 px-9 py-7 transition-all pointer-events-none ease-in-out bg-black/60 bottom-[1%] duration-500 ${state == index ? "bg-black/60 bottom-[1%] !md:w-[480px]" : "md:bg-transparent md:translate-y-[-125%]"} rounded-br-[27px] rounded-bl-[29px]`}>
                                <h1 className={`text-white w-full font-montserrat font-bold ${state == index ? "md:rotate-0" : "md:rotate-[270deg]"} text-[41px] capitalize`}>{item.title}</h1>
                                <p className={`text-[#1ABFFF] ${state == index ? "md:block" : "md:hidden"} font-montserrat font-medium text-[20px] mt-2`}>{item.designation}</p>
                            </div>
                        </div>
                    })
                }
            </Slider >
        </div >
    );
}

export default Carousel;
