module.exports = {
  use: [
    'postcss-import'
  , 'precss'
  , 'postcss-color-function'
  , 'autoprefixer']
, 'local-plugins' : true
, 'autoprefixers' : {browsers: 'last 2'}
, input: 'index.css'
, output: 'build.css'
}

