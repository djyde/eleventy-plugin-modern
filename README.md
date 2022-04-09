# eleventy-plugin-modern

An eleventy plugin with modern features.

## Features

- PostCSS support

## Usage

```bash
npm i eleven-plugin-modern
```

Add the plugin to your `eleventyConfig.js` file:

```js
// .eleventy.js
const modern = require('eleventy-plugin-modern')

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(modern)
}
```