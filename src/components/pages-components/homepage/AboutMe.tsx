import { useAnimationControls, useInView, type AnimationDefinition, type Transition } from 'framer-motion';
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
  const techniques: string[] = [
    'HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS', 'React Native',
    'Expo', 'NextJS', 'VueJS', 'NuxtJS', 'TailwindCSS', 'Ant Design',
    'Material UI', 'ESLint', 'GIT',
  ]
  const { ref: headlineRef, controls: headlineControls } = useAnimateInView({ definition: animateVisibleConfig })
  const { ref: subheadlineRef, controls: subheadlineControls } = useAnimateInView({ definition: animateVisibleConfig })
  const { ref: techniquesTitleRef, controls: techniquesTitleControls } = useAnimateInView({ definition: animateVisibleConfig })

  return (
    <div className="bg-[#202020] px-4 pb-10 mt-[-1px]">
      <div className="rounded-b-[30px] bg-white pb-10">
        <img src={meJpg} alt="naufal abbad." className="w-full max-h-[300px]" />
        <div className="p-4">
          <EaseUpAnimation ref={headlineRef} animate={headlineControls} custom={0.2}>
            <h2 className="text-xl">
              I'm a freelance creative front-end developer with 3+ years of experience working with well known brands.
            </h2>
          </EaseUpAnimation>
          <EaseUpAnimation ref={subheadlineRef} animate={subheadlineControls} custom={0.25}>
            <h3 className="text-lg mt-4">
              developing websites with a focus on visual experience.
            </h3>
          </EaseUpAnimation>
          <EaseUpAnimation ref={techniquesTitleRef} animate={techniquesTitleControls} custom={0.3}>
            <h2 className="text-2xl font-bold mt-10">
              Technique
            </h2>
          </EaseUpAnimation>
          <ul className="mt-4">
            {techniques.map((technique, techniqueIndex) => (
              <li key={techniqueIndex} className="border-b-2 border-[#202020] text-lg py-4">
                {technique}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
