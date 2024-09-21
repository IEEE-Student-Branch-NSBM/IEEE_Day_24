import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily:{
        sansation: ['var(--font-sansation)', ...fontFamily.sans],
      },
      animation:{
        'spin-slow': 'spin 30s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#002E53",
        timelinefill: "#3DA6FF",
      },
    },
  },
  plugins:[
    require("@designbycode/tailwindcss-text-stroke"),
    require("@designbycode/tailwindcss-text-shadow"),
  ],
};
export default config;
