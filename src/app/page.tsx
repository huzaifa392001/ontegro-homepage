// "use client";
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Header from "./components/header/header";
// import IntroSection from "./pages/home/IntroSection";
// import Integration from "./pages/home/Integration";
// import AboutSection from "./pages/home/AboutSection";
// import Team from "./pages/home/Team";
// import TrustedByTheBest from "./pages/home/TrustedByTheBest";
// import ISOS from "./pages/home/ISOStandards";
// import AwardSection from "./pages/home/Awards";
// import GreenSection from "./pages/home/GreenSection";
// import { Footer } from "./components/footer/Footer";
// import IntroSection2 from "./pages/home/Slider2";
// import TechSection from "./pages/home/TechSection";
// import Expertise from "./pages/home/Expertise";
// import { useTriggerStore } from "@/store/Trigger-Store";

// const Home = () => {
//   const trigger = useTriggerStore((state: any) => state.trigger);
//   const setHeader = useTriggerStore((state: any) => state.setHeader);
//   useEffect(() => {
//     if (window.innerWidth < 1024) {
//       window.addEventListener("scroll", () => {
//         setHeader(window.scrollY > 0 ? true : false);
//       });
//       document.body.style.overflowY = "scroll";
//       document.body.style.overflowX = "hidden";
//     }
//     console.log(window.innerWidth);
//     if (window.innerWidth >= 1024) {
//       gsap.registerPlugin(ScrollTrigger);
//       document.body.style.overflow = "hidden";

//       const sections: any = gsap.utils.toArray(".section");
//       let currentIndex = 0;

//       gsap.set(sections, { width: "100%", height: "100%" });
//       gsap.set(sections, { autoAlpha: 1 });

//       sections.forEach((section: any, index: any) => {
//         gsap.set(section, {
//           y: 100 * index + "%",
//           position: "absolute",
//           autoAlpha: 0,
//         });
//       });
//       gsap.set(sections[0], { y: 0, position: "static", autoAlpha: 1 });

//       const goToSection = (index: any) => {
//         if (index < 0 || index >= sections.length || index === currentIndex)
//           return;
//         const nextSection = sections[index];
//         const direction = index > currentIndex ? 1 : -1;
//         setHeader(index >= 1 ? true : false);
//         const tl = gsap.timeline({
//           // scrollTrigger: {
//           //   trigger: sections[currentIndex],
//           // },
//           onComplete: () => {
//             currentIndex = index;
//             ScrollTrigger.refresh();
//           },
//         });
//         console.log(direction);
//         tl.to(sections[currentIndex], {
//           y: direction === 1 ? "-100%" : "100%",
//           position: "absolute",
//           autoAlpha: 0,
//           duration: 0.5,
//         }).fromTo(
//           nextSection,
//           { autoAlpha: 0, y: 0 },
//           { autoAlpha: 1, duration: 0.5, y: 0 },
//           "-=0.25"
//         );
//       };

//       let scrollTimeout: any;
//       const scrollDisabledSections = ["Integration", "TechSection"];
//       const handleScroll = (e: any) => {
//         const currentSectionClass =
//           sections[currentIndex].getAttribute("class");
//         // if (
//         //   scrollDisabledSections.some(
//         //     (section) => currentSectionClass.includes(section) && !trigger
//         //   )
//         // ) {
//         //   return;
//         // }

//         clearTimeout(scrollTimeout);
//         scrollTimeout = setTimeout(() => {
//           goToSection(currentIndex + Math.sign(e.deltaY));
//         }, 100);
//       };

//       window.addEventListener("wheel", handleScroll);

//       return () => {
//         window.removeEventListener("wheel", () => handleScroll);
//       };
//     }
//   }, []);
//   return (
//     <div>
//       <main className="">
//         <Header color={false} />
//         <div className="section lg:min-h-screen">
//           <IntroSection />
//         </div>
//         <div className="section lg:min-h-screen">
//           <IntroSection2 />
//         </div>
//         <div className="section lg:min-h-screen">
//           <Integration />
//         </div>
//         <div className="section lg:min-h-screen">
//           <TechSection />
//         </div>
//         <div className="section lg:min-h-screen">
//           <AboutSection />
//         </div>
//         <div className="section lg:min-h-screen">
//           <Team />
//         </div>
//         <div className="section lg:min-h-screen">
//           <TrustedByTheBest />
//         </div>
//         <div className="section lg:min-h-screen">
//           <ISOS />
//         </div>
//         <div className="section lg:min-h-screen">
//           <Expertise />
//         </div>
//         <div className="section lg:min-h-screen">
//           <AwardSection />
//         </div>
//         <div className="section lg:min-h-screen">
//           <GreenSection />
//         </div>
//         <div className="section lg:min-h-screen">
//           <Footer />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;

'use client'
import React, { useEffect } from 'react'
import Header from './components/header/header'
import { Footer } from './components/footer/Footer'
import { useTriggerStore } from '@/store/Trigger-Store'
import IntroSection from './pages/homeSections/IntroSection'
import Redefining from './pages/homeSections/Redefining'
import Integration from './pages/homeSections/Integration'
import TechSection from './pages/homeSections/TechSection'
import Team from './pages/homeSections/Team'
import Expertise from './pages/homeSections/Expertise'
import ISOS from './pages/homeSections/ISOStandards'
import TrustedByTheBest from './pages/homeSections/TrustedByTheBest'
import AwardSection from './pages/homeSections/AwardSection'
import GreenSection from './pages/homeSections/GreenSection'
import './globals.css'

const Home = () => {
  const trigger = useTriggerStore((state: any) => state.trigger)
  const setHeader = useTriggerStore((state: any) => state.setHeader)

  return (
    <div>
      <main className="">
        <Header color={false} />

        <IntroSection />
        <Redefining />
        <Integration />
        <TechSection />
        <Team />
        {/* <Expertise />
        <ISOS />
        <TrustedByTheBest />
        <AwardSection />
        <GreenSection />
        <Footer /> */}
      </main>
    </div>
  )
}

export default Home
