
const postcss = require('postcss')
const postcssrc = require('postcss-load-config')
module.exports = eleventyConfig => {

  // postcss
  eleventyConfig.addWatchTarget('./styles/**.css')
  eleventyConfig.addTemplateFormats("css")
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    async compile(content) {
      const config = await postcssrc({});
      const result = postcss(config.plugins).process(content, config.options)
      return async () => {
        return result.css;
      };
    },
  });
}