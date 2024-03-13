"use client";

import React, { useEffect } from 'react'
import Counter from './Counter';
import PageContent from './PageContent';
import { Footer } from '@/app/components/footer/Footer';
import Header from '../components/header/header';
import "../globals.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const AboutUs: React.FC = () => {
    const [shouldStartCount, setShouldStartCount] = React.useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setShouldStartCount(true);
            } else {
                setShouldStartCount(false);
            }
        };

        // Attach event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // gsap.registerPlugin(ScrollTrigger);

    // useEffect(() => {
    //     let sections = gsap.utils.toArray(".scrollSection");
    //     gsap.to(sections, {
    //         yPercent: -100 * (sections.length - 1),
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".sectionContainer",
    //             pin: true,
    //             scrub: 1,
    //             snap: 4 / (sections.length - 1),
    //             end: () => "+=" + document.querySelector(".sectionContainer")?.scrollWidth,
    //         }
    //     })
    // }, [])

    return (
        <section className='bg-white'>
            <Header color={true} />
            <section className='pt-16 min-h-screen scrollingSection'>
                <div className="bg-white px-4 pb-5 md:pb-0 lg:px-0">
                    <div className="lg:max-w-[85%]  mx-auto lg:py-[150px]">
                        <PageContent title='Elevating Standards in Facility Management' description='Ontegra, more than a facilities management company, is your expert in proactive asset care. With roots stretching back to 2002 and the backing of Deyaar, we possess a deep understanding of customer needs. Our approach transcends traditional FM services, as we employ global best practices to not only manage but also enhance and extend the life cycle of your assets. Our capabilities have earned us the trust of a diverse clientele, managing a substantial portfolio across various industries.' imageUrl='/elevatingStandards.png' buttonTitle='Discover Our Legacy' />
                    </div>
                </div>
            </section>
            <section className='min-h-screen bg-black mt-10 lg:mt-[180px] lg:px-0 px-0 md:px-4 md:py-10 lg:py-0' >
                <div className="lg:max-w-[85%] scrollingSection lg:px-0 py-5 px-5 lg:py-[130px] mx-auto">
                    <div className="flex flex-col ">
                        <h1 className='font-montserrat text-[24px] lg:text-[60px] text-[#3B3B3B] font-bold'>Numbers Crafting the Future</h1>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap justify-between md:gap-0 gap-5 lg:gap-0 mt-5 lg:mt-[150px]">
                        <Counter shouldCount={shouldStartCount} countTill={20} title='Years' description='Two decades of pioneering FM solutions, leading the industry with innovation and service excellence' />
                        <Counter shouldCount={shouldStartCount} countTill={2000} title='Qualified Staff' description='A robust team of over two thousand experts, dedicated to upholding the highest standards of facility management' />
                        <Counter shouldCount={shouldStartCount} countTill={25000} title='Managed Units' description='Over twenty-five thousand units under our careful stewardship, ensuring operational efficiency and client satisfaction' />
                        <Counter shouldCount={shouldStartCount} countTill={30} isMillion={true} title='Sq. Ft. Portfolio' description='A portfolio exceeding thirty million square feet, showcasing our capability in managing diverse spaces with precision' />
                    </div>
                </div>
            </section>
            <section className='min-h-screen '>
                <div className="bg-white scrollingSection px-4 lg:px-0">
                    <div className="lg:max-w-[85%] mx-auto mt-10 pb-10 lg:pt-[180px] lg:pb-[180px]">
                        <PageContent shouldReverse={true} title='Crafting Excellence in Every Detail' description='Ontegra’s signature approach is defined by our ability to tune into the unique needs of our customers. We craft bespoke solutions that encompass more than mere management – we aim to revolutionize the essence of asset care. Our expansive portfolio and commitment to quality are evident in our successful projects and satisfied clientele, each a testament to our unparalleled service.' imageUrl='/excellenceInDetail.png' buttonTitle='Discover More' />
                    </div>
                </div>
            </section>
            <section className='min-h-screen '>
                <div className="bg-white scrollingSection px-4 lg:px-0">
                    <div className="lg:max-w-[85%] mx-auto pb-10 lg:pt-[180px] lg:pb-[180px]">
                        <PageContent title='We Always Deliver Beyond Expectations' description='In a world where details make the masterpiece, Ontegra ensures every pixel of your facility management is perfect. We’re not just providing services; we’re crafting experiences. From intricate planning to flawless execution, our team is dedicated to ensuring excellence. We handle everything with an unwavering commitment to delivering beyond what’s expected, every single time.' imageUrl='/person.png' buttonTitle='Get Started' />
                    </div>
                </div>
            </section>
            <Footer isScrollable />
        </section >

    )
}
export default AboutUs;