/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
const flowbite = require("flowbite-react/tailwind");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    console.log("here", `rgb(var(${variableName}))`);
    return `rgb(var(${variableName}))`;
  };
}


module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      textColor: {
        fill: withOpacity("--color-fill"),
        secondary: withOpacity("--color-secondary"),
        primary: withOpacity("--color-primary"),
      },
      backgroundColor: {
        fill: withOpacity("--color-fill"),
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
      },
      colors: {
        fill: withOpacity("--color-fill"),
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
      },
      fontSize: {
        "5xl": ["2.75rem", "2.75rem"],
      },
    },
  },
  plugins: [flowbite.plugin()]
};

