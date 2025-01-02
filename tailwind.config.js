const { Background } = require('reactflow');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:'#1E40AF',
        secondary:'#6B7280',
        accent:'#10B981',
        background:'#F3F4F6',
        surface:'#FFFFFF',
      },
      fontFamily:{
          sans:['Inter','sans-serif'],
      },
      boxShadow:{
        custom:'0 4px 6px rgba(0,0,0,0.1)',
      },
    },
    },
  plugins: [],
};

