import { MotionValue, SpringOptions, useSpring, useTransform } from 'framer-motion'


export function useSmoothTransform(
  value: MotionValue<number>,
  springOptions: SpringOptions,
  transformer: number[]
) {
  return useSpring(useTransform(value,[0,1/4,2/4,3/4,1] ,transformer), springOptions)
}
