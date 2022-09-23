const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const yaml = require("js-yaml");

module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([tailwindcss(require('./tailwind.config.js')), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      );
  });
  eleventyConfig.addWatchTarget('styles/**/*.css');
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  return {
    dir: {
      input: 'src',
      output: 'docs',
    },
    pathPrefix: "/fruits-shop/",
  };
};
