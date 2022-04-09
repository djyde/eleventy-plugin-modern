---
layout: doc
title: PostCSS
---

You don't need to configure anything to use PostCSS. It's all done for you. The plugin watches all `.css` files in `styles/`.

Add a `postcss.config.js` file to your project root.

```js
// postcss.config.js

module.exports = {
  plugins: [
    // require('autoprefixer')
  ]
}
```

## TailwindCSS

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