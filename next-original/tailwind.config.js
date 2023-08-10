/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '/path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '/path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: '#54151C', // Thay đổi thành mã màu tùy chỉnh của bạn
        black12:'#121212',
        D3B3D3:"#3D3B3D",
        F7F7F7:"#F7F7F7"
      },
      height:{
        h324: "324px",
        h90:"90%",
        h10:"10%",
        h18:"18%",
        h500:"500px",  
      },
      width:{
        420:"420px",
        
      },
      gridTemplateColumns:{
        fcolumns:"25% 25% 25% 25%"
      },
      gridTemplateRows:{
        frows:"20% 20% 20% 20% 20% "
      },
      padding: {
        px95: '95px',
      }

    },
  },
  plugins: [],
})