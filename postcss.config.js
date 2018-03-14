/**
 * localIdentName опция позволяет задавать имена CSS классам,
 * для продукционной версии будем использовать хэш из 10 символов,
 * для девелоп — названия классов + хэш из 5 символов.
 */

const preCSS = require('precss');
const autoprefixer = require('autoprefixer');
const postCSSEasyImport = require('postcss-easy-import');
const postCSSSimpleVars = require('postcss-simple-vars');
const postCSSVariables = require('postcss-css-variables');
const postCSSMixins = require('postcss-mixins');
const postCSSNested = require('postcss-nested');
const postCSSColorFunction = require('postcss-color-function');

module.exports = {
  plugins: [
    preCSS,
    autoprefixer,
    postCSSEasyImport,
    postCSSSimpleVars,
    postCSSVariables,
    postCSSMixins,
    postCSSNested,
    postCSSColorFunction,
  ],
};
