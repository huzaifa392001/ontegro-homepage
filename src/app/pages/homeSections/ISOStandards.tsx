"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

const ISOS = () => {
    const isoRef = useRef<HTMLDListElement>(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const isos = isoRef.current!;
        const ribbon = isos.querySelector(".ribbon");
        const isoLogo = isos.querySelector(".iso-logo");
        const leftText = isos.querySelector(".left-text");
        const rightText = isos.querySelector(".right-text");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: isoRef.current,
                // scroller: ".absolute.inset-0",
                start: "top center",
                toggleActions: "play none none reverse",
            },
        });

        tl.add(
            gsap.fromTo(
                leftText,
                { y: "-170%", opacity: 0.5 },
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
                    rightText,
                    { x: "150%", opacity: 0.5 },
                    {
                        x: 0,
                        opacity: 1,
                        ease: "expo.inOut",
                        duration: 5,
                    }
                ),
                "fadeImg"
            )
            .add(
                gsap.fromTo(
                    ribbon,
                    { y: "-100%", opacity: 0.5 },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "expo.inOut",
                        duration: 2,
                    }
                ),
                "fadeImg"
            )
            .add(
                gsap.fromTo(
                    isoLogo,
                    { y: "-100%", opacity: 0.5 },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "expo.inOut",
                        duration: 3,
                    }
                ),
                "fadeImg"
            );
    }, []);

    return (
        <section
            ref={isoRef}
            className="bg-white text-black relative z-10 overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="w-16 sm:w-1/12 h-screen max-md:absolute max-md:left-4 max-md:top-0 max-md:bottom-0">
                        <div className="h-full bg-[#E30713] px-3 min-[1800px]:pt-28 pt-[100px] ribbon">
                            <Image
                                src="/ISO.svg"
                                alt="ISO Logo"
                                fill={false}
                                width="98"
                                height="90"
                                className="w-full h-auto iso-logo"
                            />
                        </div>
                    </div>
                    <div className="md:w-3/5 pl-20 sm:pl-14 pt-10 md:py-28">
                        <div className="flex flex-col justify-center left-text">
                            <div className="font-montserrat font-semibold italic text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-black -tracking-[0.36px]">
                                Future-Ready FM Solutions
                            </div>

                            <h2 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-7xl xl:text-[100px] xl:leading-[113px] 2xl:text-[130px] min-[1800px]:text-[80px] 2xl:leading-[123px] min-[1800px]:leading-[89px] -tracking-[1.72px] text-black">
                                Service Beyond <span className="text-[#278CB3]">Standards</span>
                            </h2>
                        </div>
                        <div className="font-montserrat font-normal text-[22px] md:text-2xl text-[#707070] tracking-[0.682px] mb-[64px] mt-[77px]">
                            Ontegra isn’t just aligned with international service standards;
                            we define them. Adhering to ISO 41000, 55000, 14001, and 18001,
                            we’re setting the benchmark for quality in FM
                        </div>
                        <Link
                            href="/"
                        >
                            <button className='block mx-auto md:mx-0 hover:bg-transparent border text-[21px] border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[9px] font-bold font-montserrat text-white'>See Our Standards</button>

                        </Link>
                    </div>
                    <div className="md:w-5/12 flex sm:my-10 flex-wrap justify-end">
                        <div className="right-text">
                            <Image
                                src="/serviceImg1.png"
                                alt="serviceImg1"
                                fill={false}
                                width="98"
                                height="90"
                                className="pt-[25px]"
                            />
                            <Image
                                src="/serviceImg2.png"
                                alt="serviceImg2"
                                fill={false}
                                width="98"
                                height="90"
                                className="pt-[25px]"
                            />
                            <Image
                                src="/serviceImg3.png"
                                alt="serviceImg3"
                                fill={false}
                                width="98"
                                height="90"
                                className="pt-[25px]"
                            />
                            <Image
                                src="/serviceImg4.png"
                                alt="serviceImg4"
                                fill={false}
                                width="98"
                                height="90"
                                className="pt-[25px]"
                            />


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ISOS;
