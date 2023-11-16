import { defineConfig } from '@pandacss/dev'
import { keyframes } from './theme/keyframes'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes,
      tokens: {
        colors: {
          white: { value: '#f4f6f5' },
          background: { value: '#090b0a' },
          primary: { value: '#1cc57b' },
          secondary: { value: '#549c78' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
