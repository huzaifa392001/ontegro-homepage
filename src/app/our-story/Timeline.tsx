import React from 'react'
import { lato } from '../components/fonts/fonts';

const Timeline = (props: { title: string, year: number, description: string, shouldReverse?: boolean }) => {
    return (
        <div className={`md:mb-[100px] mb-[50px] md:flex justify-between items-center w-full ${props.shouldReverse && "md:flex-row-reverse"}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-black shadow-xl w-[17px] h-[17px] rounded-full absolute right-[1%] md:left-[49.59%]"></div>
            <div className={`${props.shouldReverse && "md:text-end"} order-1 bg-[#FAFAFA] md:w-[50%] w-[90%] md:px-[80px] px-5 py-[32px]`}>
                <h3 className="font-bold text-black text-[60px] font-montserrat">{props.year}</h3>
                <p className='text-[25px] font-montserrat'>{props.title}</p>
                <p className={`text-[18px] text-[#707070] md:w-[35%] ${props.shouldReverse && "md:ms-auto md:text-end"} ${lato.className}`}>{props.description}</p>
            </div>
        </div>
    )
}

export default Timeline;