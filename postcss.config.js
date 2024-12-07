const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
// import tailwindcss from "tailwindcss"
// import autoprefixer from "autoprefixer"
// export default {
//   plugins: {
//     tailwindcss: tailwindcss('./tailwind.config.js'),
//     autoprefixer: autoprefixer,
//   },
// }


module.exports = {
    plugins: [tailwindcss('./tailwind.config.js'), autoprefixer],
};