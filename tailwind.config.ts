import { Plus_Jakarta_Sans } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Plus_Jakarta_Sans: ["Plus Jakarta Sans", "sans-serif"],
        DM_Sans: ["DM Serif Display", "serif"],
        Neue: ["Helvetica Neue", "sans-serif"],
			},
      keyframes:{
        moveRtoL1:{
          '0%':{transform:'translateX(0%)'},
          // '20%':{transform:'translateX(0%)'},
          '20%':{transform:'translateX(-100%)'},
          "20.1%":{transform:"translateX(400%)"},
          '100%':{transform:'translateX(0%)'}
        },
        moveRtoL:{
          '0%':{transform:'translateX(0%)'},
          // '20%':{transform:'translateX(0%)'},
          // '29%':{transform:'translateX(-200%)'},
          // "29.1%":{transform:"translateX(300%)"},
          '100%':{transform:'translateX(-100%)'}
        },


      },
      animation:{
      run:'moveRtoL 20s linear infinite'
      }
    },
  },
  plugins: [],
}
export default config
