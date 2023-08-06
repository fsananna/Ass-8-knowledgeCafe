/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d978ed",
        
"secondary": "#f9b8e0",
        
"accent": "#425fb7",
        
"neutral": "#1d1c22",
        
"base-100": "#faf9fa",
        
"info": "#759bf5",
        
"success": "#12977e",
        
"warning": "#9d540c",
        
"error": "#f7225e",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

