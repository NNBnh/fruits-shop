module.exports = {
  content: ['./src/**/*.{njk,md}'],
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ["lemonade"],
  },
};
