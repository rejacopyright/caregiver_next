import { Config } from 'tailwindcss'
import tailwindcssLogical from 'tailwindcss-logical'

import tailwindPlugin from './src/@core/tailwind/plugin'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  important: true,
  plugins: [tailwindcssLogical, tailwindPlugin],
  theme: { extend: {} },
}

export default config
