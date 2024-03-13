"use client";

import PageContent from "@/app/about-us/PageContent";
import GreenTodayContent from "@/app/components/reuseable/GreenTodayContent";
import HomePageContent from "@/app/components/reuseable/PageContent";
import RecognizePageContent from "@/app/components/reuseable/RecognizePageContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

const GreenSection = () => {
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
            <div className="container mx-auto px-4 md:h-full">
                <section className='lg:px-0' >

                    <div className="bg-white scrollingSection relative h-[100vh]">

                        <div className="mx-auto  ">
                            <GreenTodayContent shouldReverse={true} title1='Green Today,' title2={"Greener"} title={'Tomorrow!'} description={`Ontegra is committed to a sustainable future, implementing eco-friendly practices and aiming for net-zero carbon footprint by 2030.`} imageUrl='/todayGreen.png' buttonTitle='Discover How' />
                        </div>
                    </div>
                </section >
            </div>
        </section>
    );
};

export default GreenSection;
