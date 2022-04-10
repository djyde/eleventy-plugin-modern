---
layout: home
title: eleventy-plugin-modern
---
# eleventy-plugin-modern

![npm](https://img.shields.io/npm/v/eleventy-plugin-modern?style=flat-square)

An eleventy plugin with modern features.

<div class="flex">
  <a href="https://github.com/djyde/eleventy-plugin-modern">GitHub</a>
</div>

## Features

- [PostCSS support](/#postcss)
- [Syntax Highlight](/#syntax-highlight)
- [Markdown features](/#markdown-features)

## Install

```bash
npm i eleventy-plugin-modern
```

Add the plugin to your `.eleventy.js` file:

```js
// .eleventy.js
const modern = require('eleventy-plugin-modern')

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(modern())
}
```

## PostCSS


You don't need to configure anything to use PostCSS. It's all done for you. The plugin watches all `.css` files in `styles/` and process them with PostCSS.

Add a `postcss.config.js` file to your project root.

```js
// postcss.config.js

module.exports = {
  plugins: [
    // require('autoprefixer')
  ]
}
```

### TailwindCSS


Since [TailwindCSS](https://tailwindcss.com) is a PostCSS plugin, you can use it by adding a plugin in `postcss.config.js`:

```bash
npm i tailwindcss autoprefixer
```

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
```

Then add a `tailwind.config.js` file to your project root:

```js
// tailwind.config.js

module.exports = {
  content: [
    "./**/*.{njk,css}"
  ]
}
```

Then add the css file in `styles/`:

```css
/* styles/main.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Syntax Highlight

This plugin enable the [official syntax highlight plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/) by default. You can add a [prism](https://prismjs.com/) theme to your template:

```diff
// your-template.njk

<head>
+ <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/themes/prism.min.css">
</head>
```

## Markdown Features

This plugin did some common config to the [markdown processing library](https://www.11ty.dev/docs/languages/markdown/):

- Set `linkify: true`
- Use [`markdown-it-anchor`](https://github.com/valeriangalliat/markdown-it-anchor) plugin

You can also pass your own [markdown-it options](https://github.com/markdown-it/markdown-it#init-with-presets-and-options):

```js
const modern = require('eleventy-plugin-modern')

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(modern({
    markdownOptions: {
      html: true,
      breaks: true
    }
  }))
}
```

