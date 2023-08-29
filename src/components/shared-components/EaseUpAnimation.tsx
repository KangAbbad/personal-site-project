import {
  motion,
  type AnimationControls,
  type Target,
  type VariantLabels,
  type TargetAndTransition,
} from "framer-motion";

import { forwardRef, type ReactNode, type Ref } from "react";

export const easingNumbers: number[] = [0.455, 0.03, 0.515, 0.955]

type EaseUpAnimateWrapperProps = {
  children: ReactNode
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean
  initial?: boolean | Target | VariantLabels
  custom: number
  className?: string
}

export const EaseUpAnimation = forwardRef((props: EaseUpAnimateWrapperProps, ref: Ref<HTMLDivElement> | undefined) => {
  const { initial = { opacity: 0, y: '25px' }, children, ...restProps } = props
  return (
    <motion.div ref={ref} initial={initial} whileInView="visible" {...restProps}>
      {children}
    </motion.div>
  )
})
