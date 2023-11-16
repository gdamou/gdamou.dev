import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  upRotate: {
    '0%': { animationTimingFunction: 'cubic-bezier(0.16, -0.88, 0.97, 0.53)', transform: 'translateY(0px)' },
    '30%': {
      transformOrigin: 'center',
      animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      transform: 'translateY(-10px)',
    },
    '100%': { transformOrigin: 'center', transform: 'translateY(-10px) rotate(45deg) scale(0.9)' },
  },
  downRotate: {
    '0%': { animationTimingFunction: 'cubic-bezier(0.16, -0.88, 0.97, 0.53)', transform: 'translateY(0px)' },
    '30%': {
      transformOrigin: 'center',
      animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      transform: 'translateY(10px)',
    },
    '100%': {
      transformOrigin: 'center',
      transform: 'translateY(10px) rotate(-45deg) scale(0.9)',
    },
  },
  hide: {
    '29%': { opacity: 1 },
    '30%': { opacity: 0 },
    '100%': { opacity: 0 },
  },
})
