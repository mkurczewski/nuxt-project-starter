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
 - Removing unnecessary CSS with [PurgeCSS](https://github.com/FullHuman/purgecss) with additional whitelist patterns for Vue transitions and classes names starting from `js-`
 - GZIP compression
 
 - PostCSS plugins:
   - [autoprefixer](https://github.com/postcss/autoprefixer) for adding vendor prefixes
   - [Responsive Type](https://github.com/seaneking/postcss-responsive-type) that adds ability to create fluid font sizes
 - Built-in support for [SCSS/SASS](https://sass-lang.com/) with `nuxt-sass-resources-loader` that imports all your global resources into every `.vue` file so you don't need to `@import` them manually. Path to a file with shared mixins, functions, variables etc. can be defined in `nuxt.config.js` in `modules` section:
 ``` 
   ['nuxt-sass-resources-loader', '@/assets/path/to/global.scss']
 ```
 - Serving website through host available on the same Wi-Fi network under `http://YOUR_LOCAL_IP:3000` (e.g. `http://192.168.1.120:3000`).
   
