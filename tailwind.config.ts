import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Space: ['Space+Grotesk'],
        Libre: ['Libre+Baskerville'],
        Oswald: ['Oswald'],
        Karla: ['Karla'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        thin: "100",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
        scroll: "scroll var(--animation-duration, 10s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
        scroll: {
          to: {
            transform: "translateY(calc(-100% - 0.5rem))",
          },
        },
      }
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}