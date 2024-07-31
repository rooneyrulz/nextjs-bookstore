import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#c94f46",
          secondary: "#1f8af4",
          accent: "#ecf9a7",
          neutral: "#25282d",
          "base-100": "#ffffff",
          info: "#92c5e2",
          success: "#23cd86",
          warning: "#fa9529",
          error: "#ee463a",
          body: {
            "background-color": "#e3e6e6",
          }
        },
      },
    ],
  },
};
export default config;