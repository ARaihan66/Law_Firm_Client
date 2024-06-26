const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js" ],
  theme: {
    colors: {
      navyblue: "#000053",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
});

//const withMT = require('@material-tailwind/react/utils/withMT');

//module.exports = withMT({
//  materialTailwind: {
//    content: ['./src/**/*.{js,jsx,ts,tsx}'],
//    theme: {
//      colors: {
//        navyblue: '#000053',
//      },
//      extend: {},
//    },
//    plugins: [require('daisyui')],
//  },
//  // Your other Next.js configuration goes here...
//});
