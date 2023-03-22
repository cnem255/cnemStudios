/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    
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
