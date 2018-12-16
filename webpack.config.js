// node modules
const glob = require('glob');
const autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// config files
const AUTOPREFIXER_SETTINGS = require('./autoprefixer.config');

// 共通ファイルを別で書き出すか否か？
// 'initial': 共通ファイルとして、別途書き出し。
// 'async': エントリーポイントにまとめて書き出し
const splitChunks = {
  name: 'vendor', // ファイル名
  chunks: 'initial'
};

// entry settings
let typescripts = {};
let pugs = {};
const INLINE_CSS = {inline_css_: './src/scss/inline/inline_css.scss'};
const INLINE_CSS_PUG = {inline_css: './src/pug/pages/assets/include/inline_css.pug'};
const HTML_BEAUTIFY_PLUGIN = new HtmlBeautifyPlugin({
  config: {
    html: {
      indent_size: 2,
      content_unformatted: ['script', 'noscript', 'style', 'p'],
      indent_inner_html: false,
      extra_liners: ['body', '!--', 'noscript']
    }
  }
});
let plugins = [
  new MiniCssExtractPlugin({filename: "css/[name].css"}),
  new VueLoaderPlugin()
];

// TypeScriptファイルを取得
glob.sync("./src/ts/entries/**/*.ts", {
  ignore: './src/ts/modules/**/*.ts'
}).map(function (file) {
  const FILE_PATH = new RegExp(`./src/ts/entries/`);
  const KEY = file.replace(FILE_PATH, '').replace(/\.ts$/, '');
  typescripts[KEY] = file;
});

// Pugファイルを取得
glob.sync("./src/pug/pages/**/*.pug", {
  ignore: './src/pug/pages/**/_*.pug'
}).map(function (file) {
  const FILE_PATH = new RegExp(`./src/pug/pages/`);
  const KEY = file.replace(FILE_PATH, '').replace(/\.pug$/, '.html');
  pugs[KEY] = file;
});

const pugKey = Object.keys(pugs);
const pugVal = Object.values(pugs);


module.exports = (env, argv) => {
  const {gtag, target} = env;
  const {mode} = argv;

  // ビルドの条件分岐
  const ENABLED_SOURCE_MAP = (mode === 'development');
  const DROP_CONSOLE = (mode === 'production');
  let vue = (mode === 'development')? 'vue/dist/vue.js' : 'vue/dist/vue.min.js';

  if (target === 'inlinecss') {
    entry = INLINE_CSS;
  } else if(target === 'inlinecsspug') {
    entry = INLINE_CSS_PUG;
    const localPlugins = [
      new HtmlWebpackPlugin({
        filename: '../assets/include/inline_css.html',
        template: './src/pug/pages/assets/include/inline_css.pug',
        inject: false
      }),
      HTML_BEAUTIFY_PLUGIN
    ];
    plugins.unshift(...localPlugins);
  } else if (target === 'typescript') {
    entry = typescripts;
    pugKey.forEach((val,i) => {
      let constructors = new HtmlWebpackPlugin({
        filename: `../${pugKey[i]}`,
        template: pugVal[i],
        inject: false
      });
      plugins.unshift(constructors);
    });
    plugins.push(HTML_BEAUTIFY_PLUGIN)
  }

  return {
    mode,
    devtool: 'inline-source-map',
    entry,
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                url: true,
                importLoaders: 2,
                sourceMap: ENABLED_SOURCE_MAP
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: ENABLED_SOURCE_MAP,
                plugins: [
                  autoprefixer(AUTOPREFIXER_SETTINGS)
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                data: '@import "src/scss/config/config.scss";',
                sourceMap: ENABLED_SOURCE_MAP
              }
            }
          ]
        },
        {
          test: /\.pug$/,
          oneOf: [
            // this applies to `<template lang="pug">` in Vue components
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            // this applies to pug imports inside JavaScript
            {
              use: [
                {
                  loader: 'raw-loader'
                },
                {
                  loader: 'pug-plain-loader',
                  options: {
                    basedir: 'src/pug/',
                    data: {gtag}
                  }
              }]
            }
          ]
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {appendTsSuffixTo: [/\.vue$/]}
        },
        {
          test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'img/css-bgi/',
              publicPath: '/assets/img/css-bgi/'
            }
          }]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.css', '.scss', '.vue'],
      alias: {
        vue,
        '@': `${__dirname}/src/`
      }
    },
    output: {
      filename: 'js/[name].js',
      path: `${__dirname}/dist/assets/`
    },
    optimization: {
      splitChunks,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: DROP_CONSOLE // mode --production のとき、コンソールログ削除
            }
          }
        }),
        new OptimizeCSSAssetsPlugin()
      ]
    },
    plugins
  }
}
