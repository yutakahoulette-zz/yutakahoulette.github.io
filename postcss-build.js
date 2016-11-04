module.exports = {
  use: [
    'postcss-import'
  , 'precss'
  , 'postcss-color-function'
  , 'autoprefixer'
  , 'cssnano']
, 'local-plugins' : true
, 'autoprefixers' : {browsers: 'last 2'}
, input: 'index.css'
, output: 'dist/build.css'
}

