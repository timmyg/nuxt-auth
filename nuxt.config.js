const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy'
  ],
  router: {
    middleware: ['auth'] // require auth on all pages (can disable per route: https://auth.nuxtjs.org/getting-started/middleware)
  },
  auth: {
    // Options
    redirect: {
      login: '/auth/login', // User will be redirected to this path if login is required
      logout: '/', //  User will be redirected to this path if after logout, current route is protected
      callback: '/auth/logged-in', // User will be redirect to this path by the identity provider after login
      home: '/hello'
    },
    strategies: {
      auth0: {
        domain: process.env.AUTH0_CLIENT_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID
      }
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  //   proxy: true
    baseURL: 'http://localhost:9000',
    // credentials: true
  },

  // proxy: [
  //   'http://example.com:8000/.netlify/functions/*',
  // //   '/.netlify/**': '/.netlify44/**',
  // //   // pathRewrite: { '^/api' : '/api/v1' }
  // //   // pathRewrite: { '^/.netlify/functions': 'http://localhost:9000/' }
  // //   // '^/.netlify/functions/*', 'http://localhost:9000/'
  // //   // '^/.netlify/functions/*': 'http://example.com',
  // //   // '/.netlify/functions/hello': {
  // //   //   target: 'http://localhost:9000/hello',
  // //   //   pathRewrite: {'^/api/': ''}
  // //   // }
  // ],
  // proxy: {
  //   '/api/': 'http://api.example.com',
  //   '/api2/': 'http://api.another-website.com'
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
