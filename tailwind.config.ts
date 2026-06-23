import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#fdfae9',
        'nara-beige': '#F9F6E5',
        'nara-green': '#2D6A6A',
        'spark-coral': '#FF7F67',
        'spark-teal': '#4DB6AC',
        'spark-yellow': '#FFD54F',
        'ink-black': '#1A1A1A',
        'on-surface': '#1c1c12',
        'on-surface-variant': '#3f4848',
        'surface-container': '#f1eedd',
        'surface-container-high': '#ebe9d8',
        'surface-container-highest': '#e6e3d2',
      },
      fontFamily: {
        sans: ['var(--font-lexend)', 'sans-serif'],
      },
      boxShadow: {
        hard: '6px 6px 0px 0px rgba(26,26,26,1)',
        'hard-sm': '4px 4px 0px 0px rgba(26,26,26,1)',
        'hard-lg': '8px 8px 0px 0px rgba(26,26,26,1)',
      },
    },
  },
  plugins: [],
}

export default config
