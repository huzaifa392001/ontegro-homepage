import React from 'react'
import Header from '../components/header/header';
import Timeline from './Timeline';
import { lato } from '../components/fonts/fonts';
import { Footer } from '../components/footer/Footer';

const OurStory = () => {
    const data = [
        {
            year: 2005,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed. Deyaar Facilities Management was formed"
        },
        {
            year: 2010,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed. Deyaar Facilities Management was formed"
        },
        {
            year: 2015,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed. Deyaar Facilities Management was formed"
        },
        {
            year: 2020,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed. Deyaar Facilities Management was formed"
        },
        {
            year: 2024,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed.  Deyaar Facilities Management was formed"
        }
    ]
    return (
        <section
            className='bg-white'>
            <Header color={true} />
            <section className='px-4 lg:px-0 pt-16'>
                <div className="lg:pt-[150px]">
                    <div className="flex flex-col relative items-center mb-[50px] md:mb-[150px] mt-10 md:mt-0">
                        <h1 className={`text-[60px] font-bold font-montserrat`}>2002</h1>
                        <p className='my-[10px] text-[25px] font-normal font-montserrat'>Our Inception</p>
                        <p className={`text-[#707070] text-[18px] md:w-[14%] w-[90%] mb-7 text-center  ${lato.className}`}>Deyaar Facilities Management was formed. Deyaar Facilities Management was formed
                        </p>
                        <span className='bg-black absolute bottom-[40%] md:bottom-[-7%] md:right-auto right-[1%] z-20 rounded-full h-[17px] w-[17px]'></span>
                    </div>
                    <div className="flex relative justify-center">
                        <div className="mx-auto w-full h-full">
                            <div className=" overflow-hidden h-full">
                                <div className="absolute border-black top-[-154px] md:top-[-147px] h-[106%] md:h-[102.3%] right-[2.7%] md:left-[50%] border-l-2" ></div>
                                {
                                    data.map((item, index) => {
                                        return <Timeline shouldReverse={(index + 1) % 2 !== 0 ? true : false} key={index} year={item.year} title={item.title} description={item.description} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer isScrollable={false} />
        </section>
    )
}

export default OurStory;