# nuxt-project-starter

> A simple project starter based on Nuxt (Vue).

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Nuxt features
- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server-side rendering OR Single Page App OR Static Generated, you choose 🔥
- Static file serving. ./static/ is mapped to /
- Configurable with a nuxt.config.js file
- Custom layouts with the layouts/ directory
- Middleware
- Code splitting for every pages/

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Other features
 - Optimizing images (jpg, jpeg, png, gif, svg) from `assets` folder during build/generation process.
 - Extracting CSS to single file
 - Removing unnecessary CSS with [PurgeCSS](https://github.com/FullHuman/purgecss).
 - PostCSS plugins:
   - [autoprefixer](https://github.com/postcss/autoprefixer) for adding vendor prefixes
   - [CSS MQPacker](https://github.com/hail2u/node-css-mqpacker) for packing same CSS media query rules into one
   - [Responsive Type](https://github.com/seaneking/postcss-responsive-type) that adds ability to create fluid font sizes
 - Built-in support for:
   - [Pug](https://pugjs.org/api/getting-started.html) - HTML preprocessor
   - [SCSS/SASS](https://sass-lang.com/) - CSS preprocessor
   - [LESS](http://lesscss.org/) - CSS preprocesso
 - Serving website through host available on the same Wi-Fi network under `http://YOUR_LOCAL_IP:3000` (e.g. `http://192.168.1.120:3000`).
   
