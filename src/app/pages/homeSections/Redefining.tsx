'use client'

import HomePageContent from '@/app/components/reuseable/PageContent'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef } from 'react'

const Redefining = () => {
  const introRef = useRef<HTMLDListElement>(null)
  gsap.registerPlugin(ScrollTrigger, useGSAP)

  useGSAP(
    () => {
      gsap.set('.redefiningSec .content', { xPercent: -100, autoAlpha: 0 })
      gsap.set('.redefiningSec .imgCont img', { xPercent: 100, autoAlpha: 0 })
      let tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'expo.out',
        },
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 25%',
          end: 'bottom center',
          onEnter: () => {
            tl.to('.redefiningSec .content', {
              xPercent: 0,
              autoAlpha: 1,
            }).to(
              '.redefiningSec .imgCont img',
              {
                xPercent: 0,
                autoAlpha: 1,
              },
              '<'
            )
          },
          onLeave: () => {
            tl.to('.redefiningSec .content', {
              yPercent: -110,
              duration: 2,
            }).to(
              '.redefiningSec .imgCont img',
              {
                yPercent: -110,
                duration: 2,
              },
              '<'
            )
          },
          onEnterBack: () => {
            tl.to('.redefiningSec .content', {
              yPercent: 0,
              duration: 2,
            }).to(
              '.redefiningSec .imgCont img',
              {
                yPercent: 0,
                duration: 2,
              },
              '<'
            )
          },
          onLeaveBack: () => {
            tl.to('.redefiningSec .content', {
              xPercent: -110,
            }).to(
              '.redefiningSec .imgCont img',
              {
                xPercent: 110,
              },
              '<'
            )
          },
        },
      })
    },
    {
      scope: introRef,
    }
  )

  return (
    <section ref={introRef} className="bg-white overflow-hidden lg:min-h-screen relative z-10 redefiningSec">
      <div className="container mx-auto px-4 md:h-full">
        <div className="lg:px-0">
          <div className="bg-white scrollingSection relative">
            <div className="mx-auto ">
              <HomePageContent
                textColorh1={'#000'}
                textColorp={'#278CB3'}
                title1={'Redefining'}
                title="the Landscape of Facilities Management"
                description="By integrating cutting-edge artificial intelligence to provide smarter, more efficient service solutions that are prepared for the challenges of tomorrow"
                imageUrl="/RedefiningWoman.png"
                shouldReverse={true}
                buttonTitle="Discover How"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Redefining
