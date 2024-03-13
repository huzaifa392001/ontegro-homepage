import { lato } from '@/app/components/fonts/fonts';
import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

const RecognizePageContent = (props: {
    title1?: String,
    textColorh1: String,
    textColorp: String,
    title2?: String,
    description: string,
    buttonTitle: string,
    imageUrl: string,
    shouldReverse?: boolean,
}) => {
    return (
        <section className=" relative">
            <div className={`flex flex-col justify-between items-center  2xl:pt-[240px] lg:pt-[60px] !lg:pb-[88px] container mx-auto px-4 ${props.shouldReverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <div className="lg:w-[33%] ">
                    <img src={props.imageUrl} alt="elevating standards" className='' />
                </div>
                <div className={`${props.shouldReverse ? `lg:w-[60%] ` : `lg:w-[60%]`} mt-5 md:mt-0`}>
                    {props?.title1 &&
                        <h1 className={`font-montserrat text-[${props.textColorp}] font-bold md:text-[40px] leading-[89px] lg:text-[80px] text-[24px] `}>{props.title1} <span className={`text-[${props.textColorh1}]`}>{props.title2}</span></h1>
                    }
                    <p className={`${lato.className} lg:w-[70%] md:leading-[40px] leading-[35px] text-[#707070] text-[22px] md:text-[22px] lg:mt-5 md:mt-[30px]`}>{props.description}</p>
                    <button className='block mx-auto md:mx-0 hover:bg-transparent border border-black lg:text-[25px]  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[9px] font-bold font-montserrat text-white'>{props.buttonTitle}</button>
                </div>
            </div>

        </section>
    );
}

export default RecognizePageContent;
