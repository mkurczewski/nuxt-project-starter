const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-project-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt project starter' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Additional modules
  */
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/global.scss']
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelistPatterns: [
              /js-.*/,
              /.*-enter.*/,
              /.*-leave.*/
            ]
          })
        )
        config.plugins.push(
          new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
          })
        )
        config.module.rules.push({
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 80
                },
                optipng: {
                  enabled: true
                },
                pngquant: {
                  quality: '80-90',
                  speed: 8
                },
                gifsicle: {
                  interlaced: true
                },
                svgo: {
                  plugins: [
                    { removeViewBox: false }
                  ]
                }
              }
            }
          ]
        })
      }
      config.module.rules.push(
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true
              }
            }
          ]
        }
      )
    },
    postcss: [
      require('postcss-responsive-type')(),
      require('autoprefixer')()
    ],
    extractCSS: {
      allChunks: true
    }
  }
}
