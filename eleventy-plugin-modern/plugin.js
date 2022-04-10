const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdown = require("markdown-it");
module.exports = (options) => (eleventyConfig) => {
  const defaultOptions = options || {};

  // markdown
  const markdownOptions = {
    linkify: true,
    ...defaultOptions.markdownOptions,
  };
  const md = markdown(markdownOptions)
  md.use(require('markdown-it-anchor'), {

  })

  eleventyConfig.setLibrary("md", md);

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
        return result.css;
      };
    },
  });
};
