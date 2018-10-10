(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pkg = __webpack_require__(2);
__webpack_require__(3).config();

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
  // Doc: https://github.com/nuxt-community/axios-module#usage
  '@nuxtjs/axios',
  // Doc: https://bootstrap-vue.js.org/docs/
  'bootstrap-vue/nuxt', '@nuxtjs/auth', '@nuxtjs/dotenv', '@nuxtjs/proxy'],
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
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  //   proxy: true
  // },

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
        });
      }
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"name":"nuxt-auth0","version":"1.0.0","description":"VueJS Nuxt Boilerplate with Auth0","author":"Tim","private":true,"scripts":{"start":"nuxt","start:serverless":"netlify-lambda serve .","build:prod":"nuxt build","start:prod":"nuxt start","generate:static":"nuxt generate","lint":"eslint --ext .js,.vue --ignore-path .gitignore .","precommit":"npm run lint"},"dependencies":{"@nuxtjs/auth":"^4.5.2","@nuxtjs/axios":"^5.0.0","@nuxtjs/dotenv":"^1.1.1","@nuxtjs/proxy":"^1.2.4","auth0-lock":"^11.10.0","bootstrap":"^4.0.0-beta.2","bootstrap-vue":"^1.0.2","js-cookie":"^2.2.0","jwt-decode":"^2.2.0","netlify-lambda":"^0.4.0","nuxt":"^1.0.0","uuid":"^3.3.2"},"devDependencies":{"babel-eslint":"^8.2.1","cross-env":"^5.0.1","eslint":"^4.15.0","eslint-loader":"^2.0.0","eslint-plugin-vue":"^4.0.0","node-sass":"^4.9.3","sass-loader":"^7.1.0"}}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(5)

/*
 * Parses a string or buffer into an object
 * @param {(string|Buffer)} src - source to be parsed
 * @returns {Object} keys and values from src
*/
function parse (src) {
  const obj = {}

  // convert Buffers before splitting into lines and processing
  src.toString().split('\n').forEach(function (line) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/)
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1]

      // default undefined or missing values to empty string
      let value = keyValueArr[2] || ''

      // expand newlines in quoted values
      const len = value ? value.length : 0
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, '\n')
      }

      // remove any surrounding quotes and extra spaces
      value = value.replace(/(^['"]|['"]$)/g, '').trim()

      obj[key] = value
    }
  })

  return obj
}

/*
 * Main entry point into dotenv. Allows configuration before loading .env
 * @param {Object} options - options for parsing .env file
 * @param {string} [options.path=.env] - path to .env file
 * @param {string} [options.encoding=utf8] - encoding of .env file
 * @returns {Object} parsed object or error
*/
function config (options) {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding = 'utf8'

  if (options) {
    if (options.path) {
      dotenvPath = options.path
    }
    if (options.encoding) {
      encoding = options.encoding
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }))

    Object.keys(parsed).forEach(function (key) {
      if (!process.env.hasOwnProperty(key)) {
        process.env[key] = parsed[key]
      }
    })

    return { parsed }
  } catch (e) {
    return { error: e }
  }
}

module.exports.config = config
module.exports.load = config
module.exports.parse = parse


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ])));