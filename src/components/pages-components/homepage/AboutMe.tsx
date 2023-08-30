import { useAnimationControls, useInView, type AnimationDefinition, type Transition, motion } from 'framer-motion';
import meJpg from '../../../assets/me.jpg';
import { EaseUpAnimation, easingNumbers } from '../../shared-components';
import { useEffect, useRef } from 'react';

const useAnimateInView = ({ definition }: { definition: AnimationDefinition }) => {
  const controls = useAnimationControls()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return
    controls.start(definition)
  }, [isInView])

  return { ref, controls }
}

const animateVisibleConfig = (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i,
      duration: 0.5,
      ease: easingNumbers,
    },
  })

export const AboutMe = () => {
  const techniques = [
    ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS'],
    ['React Native', 'Expo', 'NextJS', 'VueJS', 'NuxtJS'],
    ['TailwindCSS', 'Ant Design', 'Material UI', 'ESLint', 'GIT'],
  ]
  const { ref: aboutMeTitleRef, controls: aboutMeTitleControls } = useAnimateInView({ definition: animateVisibleConfig })
  const { ref: headlineRef, controls: headlineControls } = useAnimateInView({ definition: animateVisibleConfig })
  const { ref: subheadlineRef, controls: subheadlineControls } = useAnimateInView({ definition: animateVisibleConfig })
  const { ref: techniquesTitleRef, controls: techniquesTitleControls } = useAnimateInView({ definition: animateVisibleConfig })

  return (
    <div className="bg-[#202020] px-4 pb-10 mt-[-1px]">
      <div className="rounded-b-[30px] bg-white pb-10">
        {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex-1 sm:flex-none md:rounded-full overflow-hidden">
          <img src={meJpg} alt="naufal abbad." className="h-full sm:h-[200px] w-full sm:w-[200px] object-cover" />
        </motion.div> */}
        <div className="flex flex-col md:flex-row gap-6 py-8 mb-20">
          <EaseUpAnimation ref={aboutMeTitleRef} animate={aboutMeTitleControls} custom={0.1} className="md:flex-[0.5] lg:flex-[0.35]">
            <h2 className="text-xl lg:text-2xl font-bold px-6 lg:mt-2">
              About Me
            </h2>
          </EaseUpAnimation>
          <div className="md:flex-1">
            <EaseUpAnimation ref={headlineRef} animate={headlineControls} custom={0.2} className="px-6 md:pl-0">
              <h2 className="text-xl lg:text-5xl lg:leading-[60px]">
                I'm a fulltime worker also freelance creative front-end developer with 3+ years of experience in the field working with well known brands.
              </h2>
            </EaseUpAnimation>
            <EaseUpAnimation ref={subheadlineRef} animate={subheadlineControls} custom={0.25} className="px-6 sm:pl-20 lg:pl-36 mt-4 md:mt-8">
              <h3 className="text-base lg:text-3xl lg:leading-[40px]">
                Working collaboratively with brands and companies. Designing and developing websites and applications with a focus on visual experience.
              </h3>
            </EaseUpAnimation>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <EaseUpAnimation ref={techniquesTitleRef} animate={techniquesTitleControls} custom={0.1} className="md:flex-[0.5] lg:flex-[0.35]">
            <h2 className="text-xl lg:text-2xl font-bold px-6 md:mt-4">
              Techniques
            </h2>
          </EaseUpAnimation>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 md:max-w-3xl px-6">
              {techniques.map((technique, techniqueIndex) => (
                <ul key={techniqueIndex}>
                  {technique.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, y: '75px' }}
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: (techniqueIndex + itemIndex) * 0.025,
                          duration: 0.5,
                          ease: "easeInOut",
                        }
                      }}
                      className="border-b-2 border-[#202020] text-base md:text-lg w-full py-3 md:py-4"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
