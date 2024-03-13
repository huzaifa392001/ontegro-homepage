"use client";

import PageContent from "@/app/about-us/PageContent";
import HomePageContent from "@/app/components/reuseable/PageContent";
import RecognizePageContent from "@/app/components/reuseable/RecognizePageContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

const AwardSection = () => {
    const introRef = useRef<HTMLDListElement>(null);
    gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     const intro = introRef.current!;
    //     const leftText = intro.querySelector(".left-text");
    //     const topimg = intro.querySelector(".back-img");
    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: introRef.current,
    //             // scroller: ".absolute.inset-0",
    //             start: "top 40%",
    //             end: "center center",
    //             // markers: true,
    //             scrub: 1,
    //             toggleActions: "play none none reverse",
    //         },
    //     });

    //     tl.add(
    //         gsap.fromTo(
    //             leftText,
    //             { x: "-130%", opacity: 0.5 },
    //             {
    //                 opacity: 1,
    //                 x: 0,
    //                 ease: "expo.inOut",
    //                 duration: 1,
    //             }
    //         ),
    //         "fadeImg"
    //     ).add(
    //         gsap.fromTo(
    //             topimg,
    //             { x: "100%", opacity: 0.5 },
    //             {
    //                 x: 0,
    //                 opacity: 1,
    //                 ease: "expo.inOut",
    //                 duration: 1,
    //             }
    //         ),
    //         "fadeImg"
    //     );
    // }, []);

    return (
        <section
            ref={introRef}
            className="bg-white overflow-hidden lg:min-h-screen relative z-10"
        >
            <div className=" md:h-full ">
                <section className='lg:px-0' >

                    <div className="bg-white scrollingSection relative h-[100vh]">

                        <div className="mx-auto  ">
                            <RecognizePageContent textColorh1={'#278CB3'} textColorp={"#000"} title1={'Excellence'} title2='Recognized' description='Our esteemed clientele is a testament to our trusted, high-quality service. See the diverse portfolio that makes us a leader in FM' imageUrl='/Company.png' shouldReverse={true} buttonTitle='See Our Awards' />
                            <div className="overflow-hidden absolute left-0 right-0 z-60 bottom-0">
                                <Image
                                    src="/recognizeBottomImg.png"
                                    alt=""
                                    className="back-img block object-cover h-auto w-full pointer-events-none"
                                    width="1920"
                                    height="357"
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </section >
            </div>
        </section>
    );
};

export default AwardSection;
