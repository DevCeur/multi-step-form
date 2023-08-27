import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: {
          primary: "#EFF5FF",
          secondary: "#FFFFFF",
        },

        stroke: {
          default: "D6D9E6",
        },

        grey: {
          default: "#9699AA",
          light: "#D6D9E6",
          lightest: "#F8F9FF",
        },

        blue: {
          light: "#ABBCFF",
          sky: "#BEE2FD",
        },

        denim: "#022959",

        orange: "#FFAF7E",

        purple: "#483EFF",

        red: "#EE374A",
      },

      boxShadow: {
        default: "0px 25px 40px -20px rgba(0, 0, 0, 0.10)",
      },
    },
  },

  plugins: [],
};

export default config;
