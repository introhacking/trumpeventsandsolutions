/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      maxWidth: {
        fullWidth: "var(--maxWidth)",
      },
      colors:{
        "customPurple":{
          50:"rgba(102,51,102, 0.025)",
          100:"rgba(102,51,102, 0.1)",
          200:"rgba(102,51,102, 0.2)",
          300:"rgba(102,51,102, 0.3)",
          400:"rgba(102,51,102, 0.4)",
          500:"rgba(102,51,102, 0.5)",
          600:"rgba(102,51,102, 0.6)",
          700:"rgba(102,51,102, 0.7)",
          800:"rgba(102,51,102, 0.8)",
          900:"rgba(102,51,102, 0.9)",
          full:"rgba(102,51,102, 1)",
          

        }
      }
    },
  },
  plugins: [],
}

