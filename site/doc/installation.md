---
title: Installation
layout: doc
---

```bash
npm i eleventy-plugin-modern
```

Add the plugin to your `.eleventy.js` file:

```js
// .eleventy.js
const modern = require('eleventy-plugin-modern')

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(modern)
}
```