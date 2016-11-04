#!/bin/bash

echo "copying index.html into dist/index.html..."
cp index.html dist/index.html
echo "copying images/ into dist/images..."
cp -r images/ dist/images
echo "copying et-book/ into dist/et-book"
cp -r et-book/ dist/et-book
echo "browserifying index.js into dist/index.js..."
browserify -v -t babelify index.js | uglifyjs > dist/index.js
echo "compiling index.css into dist/build.css"
npm run build-css

echo "done. now cd into dist and push changes to the gh-pages branch"
