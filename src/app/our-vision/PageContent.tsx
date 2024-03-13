import React from 'react'
import { lato } from '../components/fonts/fonts'

const Content = (props: { title: string, description: string, shouldReverse?: boolean, ImagePath: string }) => {
    return (
        <div className="md:max-w-[91%] mx-auto lg:pt-[200px]">
            <div className="bg-[#FAFAFA] md:px-[64px] px-5 py-5 md:py-[64px]">
                <div className={`${props.shouldReverse && "md:flex-row-reverse"} flex md:flex-row flex-col justify-between items-center`}>
                    <div className="md:w-[25%]">
                        <img src={props.ImagePath} alt="#" />
                    </div>
                    <div className="md:w-[60%]">
                        <h1 className='font-montserrat text-[32px] md:text-[60px] mt-5 md:mt-0 font-bold'>{props.title}</h1>
                        <p className={`${lato.className} text-[#707070] text-[18px] md:text-[22px] mt-[20px] md:w-[60%]`}>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content