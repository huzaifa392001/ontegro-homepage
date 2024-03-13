import { lato } from '@/app/components/fonts/fonts';
import React from 'react'

const PageContent = (props: { title: string, description: string, buttonTitle: string, imageUrl: string, shouldReverse?: boolean }) => {
    return (
        <section>
            <div className={`flex flex-col justify-between ${props.shouldReverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <div className="lg:w-[33%] mt-6">
                    <img src={props.imageUrl} alt="elevating standards" className='max-w-full h-full object-cover' />
                </div>
                <div className={`${props.shouldReverse ? "lg:w-[53%]" : "lg:w-[57%]"} mt-5 md:mt-0`}>
                    <h1 className='font-montserrat font-bold md:text-[40px] lg:text-[62px] text-[24px] md:max-w-[95%]'>{props.title}</h1>
                    <p className={`${lato.className} md:leading-[40px] leading-[35px] text-[#707070] text-[18px] md:text-[22px] mt-5 md:mt-[68px]`}>{props.description}</p>
                    <button className='block mx-auto md:mx-0 hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[9px] font-bold font-montserrat text-white'>{props.buttonTitle}</button>
                </div>
            </div>
        </section>
    )
}

export default PageContent;