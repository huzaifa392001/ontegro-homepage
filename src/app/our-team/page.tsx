import React from 'react'
import Header from '../components/header/header';
import { lato } from '../components/fonts/fonts';
import Carousel from './Carousel';

const Team = () => {
    return (
        <section className='bg-white min-h-screen'>
            <Header color={true} />
            <section className='px-4 lg:px-0 mx md:pt-16 pt-5'>
                <div className="lg:py-[150px] md:ms-auto md:max-w-[92%] px-5 md:px-0">
                    <div className="flex justify-between md:flex-row flex-col">
                        <div className="md:w-[21%] mt-14">
                            <div className="flex flex-col">
                                <h4 className='uppercase text-[#B7B7B7] font-montserrat font-semibold text-[25px]'>BEHIND THE SCENES</h4>
                                <h1 className='md:text-[60px] text-[30px] font-montserrat font-bold text-black md:leading-[76px] mt-[9px]'><span className='text-[#B7B7B7]'>Ontegra’s</span> Leadership</h1>
                                <p className={`${lato.className} md:leading-[40px] leading-[32px] text-[16px] md:text-[22px] mt-5 md:mt-[100px] text-[#707070]`}>We are committed to advancing the FM sector in the region with AI and cutting-edge technology. Our focus is on leveraging AI, Machine Learning to enhance customer experiences, ensuring sustainable asset and building management</p>
                            </div>
                        </div>
                        <div className="md:w-[70%] md:me-5 mt-10 md:mt-0">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Team;