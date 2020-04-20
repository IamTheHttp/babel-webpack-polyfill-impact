const path = require('path');

module.exports = {
  entry: {
    'just-promise':'./babelify/just-promise',
    'promise-with-spread':'./babelify/promise-with-spread',
    'promise-with-spread-just-chrome':'./babelify/promise-with-spread-just-chrome',
    'promise-with-spread-no-ie':'./babelify/promise-with-spread-no-ie'
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"), // string
  }
}
