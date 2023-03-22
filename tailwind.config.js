/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        cnem: {
          primary: "#0284c7",

          secondary: "#e11d48",

          accent: "#9333ea",

          neutral: "#292D32",

          "base-100": "#344151",

          info: "#7dd3fc",

          success: "#22c55e",

          warning: "#eab308",

          error: "#dc2626",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
