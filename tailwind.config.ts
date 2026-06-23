import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE6',
        teal: {
          DEFAULT: '#5A8A8A',
          dark: '#3D6666',
          light: '#7AABAB',
        },
        brown: '#8B6F47',
        coral: '#E8917D',
        mustard: '#E5B85C',
        sage: '#A8C66C',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
      boxShadow: {
        memphis: '5px 5px 0px 0px',
        'memphis-sm': '3px 3px 0px 0px',
        'memphis-lg': '8px 8px 0px 0px',
      },
    },
  },
  plugins: [],
}

export default config
