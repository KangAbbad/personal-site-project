import { useAnimationControls } from "framer-motion";

import { useEffect } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { EaseUpAnimation, easingNumbers } from "../../shared-components";

export const Hero = () => {
  const currentYear = new Date().getFullYear()
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i,
        duration: 0.5,
        ease: easingNumbers,
      },
    }))
  }, [])

  return (
    <div className="flex flex-col bg-[#202020] h-[90vh] sm:h-screen py-8 px-6">
      <div className="flex gap-4">
        <div className="flex-none">
          <EaseUpAnimation animate={controls} custom={0.2}>
            <h1 className="text-white text-xs sm:text-sm font-bold">
              Naufal Abbad.
            </h1>
          </EaseUpAnimation>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-end gap-2 sm:gap-4 md:gap-32">
            <EaseUpAnimation animate={controls} custom={0.1}>
              <h1 className="text-white text-[10px] md:text-xs text-right">
                FRONTEND DEVELOPER
              </h1>
              <h1 className="text-white text-[10px] md:text-xs text-right">
                2019 - {currentYear}
              </h1>
            </EaseUpAnimation>
            <EaseUpAnimation animate={controls} custom={0}>
              <h1 className="text-white text-[10px] md:text-xs text-right">
                AVAILABLE FOR FREELANCE
              </h1>
              <h1 className="text-white text-[10px] md:text-xs text-right">
                PROJECTS IN OCTOBER {currentYear}
              </h1>
            </EaseUpAnimation>
          </div>
        </div>
      </div>
      <div className="flex md:justify-end md:pr-10 lg:pr-24 mt-auto sm:my-auto mb-20">
        <div className="sm:w-[425px]">
          <EaseUpAnimation animate={controls} custom={0.3}>
            <h1 id="intro-hero-title" className="text-white text-3xl">
              Frontend Developer currently based in Surakarta, Indonesia
            </h1>
          </EaseUpAnimation>
          <EaseUpAnimation animate={controls} custom={0.4}>
            <p className="text-white text-sm mt-4">
              Currently working as independent.
            </p>
          </EaseUpAnimation>
          <EaseUpAnimation animate={controls} custom={0.5}>
            <p className="text-white text-sm">
              I create digital experiences and solve problems through Code.
            </p>
          </EaseUpAnimation>
          <div className="flex gap-4 mt-4 md:mt-8">
            <EaseUpAnimation animate={controls} custom={0.6}>
              <button className="border border-white rounded-full overflow-hidden hover:bg-white/10 active:bg-white/20 text-white text-center text-xs sm:text-sm w-[100px] py-2">
                Let's Talk
              </button>
            </EaseUpAnimation>
            <EaseUpAnimation animate={controls} custom={0.7}>
              <button className="border border-white rounded-full flex items-center justify-center gap-2 overflow-hidden hover:bg-white/10 active:bg-white/20 w-[150px] text-white text-xs sm:text-sm py-2">
                Scroll for More <FaCircleArrowDown fontSize="16px" />
              </button>
            </EaseUpAnimation>
          </div>
        </div>
      </div>
      <div className="flex justify-between sm:justify-end md:justify-between gap-8">
        <EaseUpAnimation initial={{ opacity: 0, y: 0 }} animate={controls} custom={1}>
          <h6 className="text-white text-[10px] md:text-sm">
            7°34'9.296 S, 110°49'42.412 E
          </h6>
        </EaseUpAnimation>
        <div className="flex-1 sm:flex-none md:flex-1 flex items-center justify-end gap-16">
          <EaseUpAnimation initial={{ opacity: 0, y: 0 }} animate={controls} custom={1} className="hidden md:inline-block">
            <h6 className="text-white text-[10px] md:text-sm">
              INSTAGRAM
            </h6>
          </EaseUpAnimation>
          <EaseUpAnimation initial={{ opacity: 0, y: 0 }} animate={controls} custom={1} className="hidden md:inline-block">
            <h6 className="text-white text-[10px] md:text-sm">
              LINKEDIN
            </h6>
          </EaseUpAnimation>
          <EaseUpAnimation initial={{ opacity: 0, y: 0 }} animate={controls} custom={1} className="hidden md:inline-block">
            <h6 className="text-white text-[10px] md:text-sm">
              GITHUB
            </h6>
          </EaseUpAnimation>
          <EaseUpAnimation initial={{ opacity: 0, y: 0 }} animate={controls} custom={1}>
            <h6 className="text-white text-[10px] md:text-sm">
              @{currentYear}
            </h6>
          </EaseUpAnimation>
        </div>
      </div>
    </div>
  )
}
