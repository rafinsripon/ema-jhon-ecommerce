/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f77e9a",
        
"secondary": "#d33fa9",
        
"accent": "#627ef7",
        
"neutral": "#2B2F3B",
        
"base-100": "#EAEAF0",
        
"info": "#87B3D9",
        
"success": "#218C51",
        
"warning": "#F2D66E",
        
"error": "#E43F73",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
