import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
const Alegra = '/alegra.png'

function Team() {
  const animationRef = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger, useGSAP)

  useGSAP(
    () => {
      const intro = animationRef.current!
      const team = intro.querySelectorAll('.team')
      gsap.set(team, { autoAlpha: 0, yPercent: 100 })
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationRef.current,
          start: 'top center',
          onEnter: () => {
            tl.to(team, { yPercent: 0, opacity: 1, stagger: 0.5, duration: 1 })
          },
          onLeave: () => {
            tl.to(team, { yPercent: -100, opacity: 0, stagger: 0.5, duration: 1 })
          },
          onEnterBack: () => {
            tl.to(team, { yPercent: 0, opacity: 1, stagger: 0.5, duration: 1 })
          },
          onLeaveBack: () => {
            tl.to(team, { yPercent: 100, opacity: 0, stagger: 0.5, duration: 1 })
          },
        },
      })
    },
    { scope: animationRef }
  )
  return (
    <div ref={animationRef} className="bg-white relative z-30 min-h-[100svh] flex items-center justify-center py-20 lg:pt-0">
      <div className="container mx-auto pt-28 lg:px-5 gap-5 flex-col lg:flex-row px-4 flex items-strech justify-center">
        <div className="team w-full">
          <div className="bg-[#101010]  relative z-10 pt-[5px] flex items-center justify-center">
            <Image src="/Alegra.png" alt="future building" className="h-auto  " width={390} height={390} />
            <span className="absolute team-bg w-[345px] top-[10px] left-[50%] translate-x-[-50%] h-[345px] bg-[#ffff] z-[-1] opacity-10 rounded-full"></span>
          </div>
          <div className="flex flex-col items-center justify-strech">
            <h4 className="text-black text-center mt-[37px] mb-[10px] font-montserrat font-bold text-lg md:text-[40px] md:leading-[45px]">Alegra</h4>
            <p className="text-[#9B9B9B] text-center font-montserrat font-medium text-sm md:text-[20px]">Your 24x7 AI Concierge</p>
            <div className="font-montserrat cursor-pointer py-1 rounded-[20px] mt-[20px] min-[1820px]:mt-[38px] px-4 bg-[#000] font-medium text-[20px] text-white">Know more</div>
          </div>
        </div>
        <div className="w-full team">
          <div className="bg-[#101010] relative z-10  flex items-center justify-center pt-[18px]">
            <Image src="/TechiMain.png" alt="future building" className="z-10 h-auto" width={446} height={439} />
            <span className="absolute team-bg w-[345px] top-[10px] left-[50%] translate-x-[-50%] h-[345px] bg-[#ffff] z-[-1] opacity-10 rounded-full"></span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-black text-center mt-[37px] mb-[10px] font-montserrat font-bold text-lg md:text-[40px] md:leading-[45px]">Techi</h4>
            <p className="text-[#9B9B9B] text-center font-montserrat font-medium text-sm md:text-[20px]">Our AI Expert in Excellence</p>
            <div className="font-montserrat cursor-pointer py-1 mt-[20px] min-[1820px]:mt-[38px] rounded-[20px] px-4 bg-[#000] font-medium text-[20px] text-white">Know more</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
