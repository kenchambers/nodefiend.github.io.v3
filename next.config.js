// next.config.js
// const withTM = require('next-transpile-modules')(['three', 'react-spring']); // pass the modules you would like to see transpiled
//
//
// module.exports = withTM({
//   future: {
//     webpack5: true,
//   },
// });
module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
}

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });
//
//     return config;
//   }
// };