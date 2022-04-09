const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = (eleventyConfig) => {
  // syntax highlight
  eleventyConfig.addPlugin(syntaxHighlight);
  
  // postcss
  eleventyConfig.addWatchTarget("./styles/");
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    async compile(content) {
      return async () => {
        const config = await postcssrc({});
        const result = postcss(config.plugins).process(content, config.options);
        console.log("render");
        return result.css;
      };
    },
  });
};
