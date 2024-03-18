import { lato } from "@/app/components/fonts/fonts";
import React from "react";

const GreenTodayContent = (props: {
  title: string;
  title1?: string;
  title2?: string;
  description: string;
  buttonTitle: string;
  imageUrl: string;
  shouldReverse?: boolean;
}) => {
  // Function to wrap specific text in the description with the desired color
  const formatDescription = (description: string) => {
    // Replace "net-zero carbon" with span having custom color
    return description.replace(
      "net-zero carbon",
      "<span style='color: #3C8E07'>net-zero carbon</span>"
    );
  };

  return (
    <section className=" h-full">
      <div
        className={`flex flex-col justify-between items-center  2xl:pt-[240px] lg:pt-[120px] ${
          props.shouldReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="lg:w-[33%] greenMainImg">
          <img src={props.imageUrl} alt="elevating standards" className="" />
        </div>
        <div
          className={`greenContent ${
            props.shouldReverse ? "lg:w-[50%]" : "lg:w-[60%]"
          } mt-5 md:mt-0`}
        >
          <h1
            className={`font-montserrat text-[#000] font-semibold uppercase italic md:text-[40px] lg:text-[37px] text-[24px] md:max-w-[95%]`}
          >
            {props.title1}
          </h1>

          {props?.title2 && (
            <h1
              className={`font-montserrat text-[#3C8E07] font-bold md:text-[40px] lg:text-[80px] text-[24px] md:max-w-[95%]`}
            >
              {props.title2}
            </h1>
          )}
          <h1 className="font-montserrat font-bold md:text-[40px] lg:leading-[70px] lg:text-[80px] text-[24px] md:max-w-[95%]">
            {props.title}
          </h1>
          <p
            className={`${lato.className} lg:w-[70%] md:leading-[40px] leading-[35px] text-[#707070] text-[22px] md:text-[22px] mt-5 md:mt-[30px]`}
            dangerouslySetInnerHTML={{
              __html: formatDescription(props.description),
            }}
          ></p>
          <button className="block mx-auto md:mx-0 hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[9px] font-bold font-montserrat text-white">
            {props.buttonTitle}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GreenTodayContent;
