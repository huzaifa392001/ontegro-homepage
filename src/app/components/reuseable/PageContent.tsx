import {lato} from "@/app/components/fonts/fonts";
import React from "react";

const PageContent = (props: {
  title: string;
  title1?: String;
  textColorh1: String;
  textColorp: String;
  title2?: String;
  description: string;
  buttonTitle: string;
  imageUrl: string;
  shouldReverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col justify-between items-center ${
        props.shouldReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="lg:w-[33%] imgCont overflow-hidden">
        <img src={props.imageUrl} alt="elevating standards" className=""/>
      </div>
      <div
        className={`content ${
          props.shouldReverse
            ? "lg:w-[50%] lg:pt-[300px]"
            : "lg:w-[60%] lg:pt-[200px]"
        } mt-5 md:mt-0`}
      >
        <h1
          className={`font-montserrat text-[${props.textColorp}] font-bold md:text-[40px] lg:text-[60px] text-[24px] md:max-w-[95%]`}
        >
          {props.title1}
        </h1>
        {props?.title2 && (
          <h1
            className={`font-montserrat text-[${props.textColorh1}] font-bold md:text-[40px] lg:text-[60px] text-[24px] md:max-w-[95%]`}
          >
            {props.title2}
          </h1>
        )}
        <h1
          className="font-montserrat font-bold md:text-[40px] lg:leading-[70px] lg:text-[60px] text-[24px] md:max-w-[95%]">
          {props.title}
        </h1>
        <p
          className={`${lato.className} lg:w-[80%] md:leading-[40px] lg:leading-[35px] text-[#707070] text-[22px] md:text-[22px] mt-5 md:mt-[30px]`}
        >
          {props.description}
        </p>
        <button
          className="block mx-auto md:mx-0 hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[9px] font-bold font-montserrat text-white">
          {props.buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default PageContent;
