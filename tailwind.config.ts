import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'var(--font-montserrat)',
        display: 'var(--font-open-sans)',
      },
      // borderRadius: {
      //   '4xl': '2rem',
      // },
    },
  },
  plugins: [forms],
}
export default config
