const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
module.exports = (eleventyConfig) => {
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
