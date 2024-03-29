/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" // adjust this line to ensure Tailwind checks all your project files
    
  ],
  theme: {
    extend: {
      backgroundImage:{  'provence' : 'url("/assets/image-provence.webp")',
    'fond-provence-logo': 'url("/assets/plantemacrodouce.jpg")',
  'leemon-strawberry': 'url("/assets/chemin.jpg")',}
      
    
    },
  },
  darkMode: "class",

  plugins: [nextui()],
}

