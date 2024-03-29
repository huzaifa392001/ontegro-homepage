"use client";
//ts-nocheck

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IntroSection = () => {
  const introReff = useRef<HTMLDListElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const intro = introReff.current!;
    const secondImg = intro.querySelector(".frontBgImg");
    const firstText = intro.querySelector(".firstText");
    const secondText = intro.querySelector(".secondText");

    gsap.to(secondImg, {
      opacity: 1,
      y: "-100%",
    });

    gsap.fromTo(
      firstText,
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: "power3.out" }
    );

    gsap.fromTo(
      secondText,
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.9, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      id="intro"
      className="min-h-screen w-full bg-white overflow-hidden"
      ref={introReff}
    >
      <div className="h-full w-full  inset-0 overflow-hidden">
        <div className="backBgImg h-[400px] inset-0">
          <Image
            src="/Future-Building-Enhanced.png"
            alt=""
            className="back-img block object-cover h-auto w-full pointer-events-none"
            fill={true}
            priority={true}
          />
        </div>
        <div className="frontBgImg opacity-0 overflow-hidden absolute left-0 right-0 z-60 top-full">
          <Image
            src="/Future-Building-Enhanced001.png"
            alt=""
            className="front-img block w-full h-auto object-cover pointer-events-none"
            priority={true}
            width="1920"
            height="388"
          />
        </div>

        <div className="absolute z-30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[1429px] py-28">
          <div className="container mx-auto px-4">
            <div className="block firstText opacity-0">
              <svg
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="1429.326"
                height="182.747"
                viewBox="0 0 1429.326 182.747"
              >
                <defs>
                  <clipPath id="a">
                    <rect width="1429.326" height="182.747" fill="none" />
                  </clipPath>
                </defs>
                <g transform="translate(-204 -618)">
                  <g transform="translate(204 618)">
                    <g clipPath="url(#a)">
                      <path
                        d="M669.421,33.5a25.47,25.47,0,0,0-8.763-8.131q-9.088-5.031-21.443-5.023A51.884,51.884,0,0,0,617.684,24.9a56.337,56.337,0,0,0-17.966,12.75,60.158,60.158,0,0,0-12.276,19.212A63.816,63.816,0,0,0,583,81.008q0,15.647,6.48,26.571a44.991,44.991,0,0,0,16.508,16.613,41.085,41.085,0,0,0,20.477,5.69,39.289,39.289,0,0,0,22.6-6.568,43.156,43.156,0,0,0,6.006-4.97l-1.949,9.606h41.147L715.327,22.282H671.669ZM659.6,84.1a20.125,20.125,0,0,1-6.673,8.412A17.057,17.057,0,0,1,642.885,95.5q-7.349,0-11.485-4.636-4.162-4.636-4.162-11.977a30.93,30.93,0,0,1,2.423-12.75,19.482,19.482,0,0,1,6.761-8.394,17.038,17.038,0,0,1,9.94-3q7.349,0,11.5,4.636Q662,64.008,662.01,71.349A31.221,31.221,0,0,1,659.6,84.1"
                        transform="translate(440.845 15.388)"
                        fill="#fff"
                      />
                      <path
                        d="M879.6,21.45,814.693,129.243q-8.693,14.488-17,22.6a47.905,47.905,0,0,1-17.878,11.4,66.511,66.511,0,0,1-21.724,3.284,61.712,61.712,0,0,1-17.3-2.511,41.078,41.078,0,0,1-13.8-6.568l18.932-30.329a29.468,29.468,0,0,0,7.341,4.057,23.525,23.525,0,0,0,8.5,1.545,14.08,14.08,0,0,0,8.5-2.406,19.035,19.035,0,0,0,2.283-2.072L749.4,21.45h43.465l10.8,56.812L836.909,21.45Z"
                        transform="translate(549.725 16.22)"
                        fill="#fff"
                      />
                      <path
                        d="M61.062,62.187h56.39L110.5,96.573H54.213L45.59,139.845H0L27.045,4.62H136.963l-6.954,34.386H65.681Z"
                        transform="translate(0 3.493)"
                        fill="#fff"
                      />
                      <path
                        d="M158.725,21.45H202.4L181.327,127.119H140.2l2.107-10.449a41.906,41.906,0,0,1-9.554,6.779,47.182,47.182,0,0,1-21.741,5.6q-12.723,0-22.11-5.5a30.306,30.306,0,0,1-13.329-16.42Q71.619,96.2,74.9,79.79L86.494,21.45h43.658L119.509,74.574c-1.142,5.8-.9,10.2.79,13.242q2.5,4.531,9.079,4.531a16.641,16.641,0,0,0,12.258-4.917q4.926-4.926,6.849-15.173Z"
                        transform="translate(55.51 16.22)"
                        fill="#fff"
                      />
                      <path
                        d="M606.184,26.339q-11.986-5.98-28.977-5.989-19.7,0-34.474,7.92a57.549,57.549,0,0,0-22.9,21.636,59.934,59.934,0,0,0-8.114,31.1q0,14.884,7.341,25.886a47.846,47.846,0,0,0,20.389,17q13.039,5.98,30.417,5.989a98.05,98.05,0,0,0,23.673-2.9,69.921,69.921,0,0,0,22.5-10.238L597.878,90.281a37.247,37.247,0,0,1-11.011,5.514,41.066,41.066,0,0,1-11.977,1.826q-10.247,0-15.542-4.145a13.756,13.756,0,0,1-4.742-8.219h73.987c.65-2.827,1.194-5.8,1.651-8.886a67.3,67.3,0,0,0,.667-9.466,45.359,45.359,0,0,0-6.375-24.147,43.81,43.81,0,0,0-18.352-16.42M556.485,64.2a23.483,23.483,0,0,1,6.234-9.852q4.636-4.241,12.557-4.25a17.475,17.475,0,0,1,9.466,2.424,13.284,13.284,0,0,1,5.514,6.761,14.159,14.159,0,0,1,.825,4.917Z"
                        transform="translate(386.945 15.388)"
                        fill="#fff"
                      />
                      <path
                        d="M756.56,0,746.83,48.611a26.38,26.38,0,0,0-11.222-9.29,46.777,46.777,0,0,0-18.844-3.583,51.884,51.884,0,0,0-21.531,4.548,56.337,56.337,0,0,0-17.966,12.75,60.16,60.16,0,0,0-12.276,19.212A63.814,63.814,0,0,0,660.55,96.4q0,15.647,6.48,26.571a44.991,44.991,0,0,0,16.508,16.613,41.085,41.085,0,0,0,20.477,5.69,38.693,38.693,0,0,0,21.443-5.989,46.8,46.8,0,0,0,6.954-5.514l-1.932,9.571h41.147L800.218,0ZM737.154,99.487a20.125,20.125,0,0,1-6.673,8.412,17.057,17.057,0,0,1-10.045,2.985q-7.35,0-11.485-4.636-4.162-4.636-4.162-11.977a30.93,30.93,0,0,1,2.423-12.75,19.482,19.482,0,0,1,6.761-8.394,17.038,17.038,0,0,1,9.94-3q7.349,0,11.5,4.636,4.136,4.636,4.145,11.977a31.221,31.221,0,0,1-2.406,12.75"
                        transform="translate(499.486)"
                        fill="#fff"
                      />
                      <path
                        d="M329.764,21.45,308.708,127.119H267.561l2.125-10.449a41.907,41.907,0,0,1-9.554,6.779,47.182,47.182,0,0,1-21.741,5.6q-12.75,0-22.11-5.5a30.306,30.306,0,0,1-13.329-16.42Q199,96.2,202.267,79.79l11.591-58.34h43.658L246.891,74.574q-1.739,8.693.773,13.242,2.529,4.531,9.079,4.531a16.653,16.653,0,0,0,12.276-4.917q4.926-4.926,6.849-15.173L286.106,21.45Z"
                        transform="translate(151.829 16.22)"
                        fill="#fff"
                      />
                      <path
                        d="M370.3,20.35l-7.727,38.636c-1.791-.263-3.442-.457-4.917-.58-1.493-.123-3-.193-4.548-.193q-10.8,0-17.474,4.829T326.64,79.076l-9.852,48.874H273.13L294.186,22.282h41.147l-2.107,10.607a36.541,36.541,0,0,1,10.326-7.13q11.67-5.4,26.746-5.409"
                        transform="translate(206.532 15.388)"
                        fill="#fff"
                      />
                      <path
                        d="M557.026,16.316q-14.673-11.7-41.533-11.7H454.835L427.79,139.845h45.59l6.8-34h11.1l19.195,34H557.8l-22.532-39.356c1.458-.544,2.9-1.142,4.285-1.791q15.358-7.139,23.761-19.9t8.394-29.749q0-21.048-14.682-32.735m-36.7,50.42q-5.216,4.715-14.682,4.724H486.973l6.322-31.681h15.244c5.286,0,9.431,1.071,12.469,3.2,3.021,2.125,4.531,5.62,4.531,10.519q0,8.509-5.216,13.241"
                        transform="translate(323.48 3.493)"
                        fill="#fff"
                      />
                      <path
                        d="M419.954,26.339q-11.96-5.98-28.977-5.989-19.7,0-34.474,7.92a57.55,57.55,0,0,0-22.9,21.636,59.935,59.935,0,0,0-8.114,31.1q0,14.884,7.341,25.886a47.846,47.846,0,0,0,20.389,17q13.04,5.98,30.417,5.989a98.051,98.051,0,0,0,23.673-2.9,69.753,69.753,0,0,0,22.5-10.238L411.648,90.281a36.829,36.829,0,0,1-11.011,5.514,40.976,40.976,0,0,1-11.977,1.826c-6.814,0-12.012-1.387-15.542-4.145a13.65,13.65,0,0,1-4.724-8.219h73.97c.65-2.827,1.194-5.8,1.651-8.886a64.763,64.763,0,0,0,.667-9.466,45.36,45.36,0,0,0-6.375-24.147,43.81,43.81,0,0,0-18.352-16.42M370.255,64.2a23.485,23.485,0,0,1,6.234-9.852c3.091-2.827,7.288-4.25,12.557-4.25a17.433,17.433,0,0,1,9.466,2.424,13.284,13.284,0,0,1,5.514,6.761,13.761,13.761,0,0,1,.825,4.917Z"
                        transform="translate(246.125 15.388)"
                        fill="#fff"
                      />
                      <path
                        d="M212.559,37.476h21.548l-6.375,31.874H206.184l-5.3,26.465c-.632,3.6-.246,6.252,1.159,7.92,1.422,1.668,3.618,2.511,6.568,2.511a17.289,17.289,0,0,0,4.935-.667,38.2,38.2,0,0,0,4.724-1.844L223.29,133.1a45.828,45.828,0,0,1-13.417,4.742,79.077,79.077,0,0,1-15.173,1.44q-13.514,0-22.988-5.023a28,28,0,0,1-13.329-14.769q-3.846-9.773-1.159-23.48l5.321-26.659H147.95l6.375-31.874h14.594L174.8,7.92H218.46Z"
                        transform="translate(111.875 5.989)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <h1 className="secondText opacity-0 font-montserrat text-base sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[46px] lg:leading-[66px] xl:leading-[86px] uppercase font-normal italic text-center text-primary tracking-[6.58px]">
              FACILITIES MANAGEMENT SOLUTIONS
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
