import h from 'snabbdom/h'
import link from './link'
import id from './id'

let body = _ =>
  [
    h('hr')
  , h('h3.mb1.italic', 'Code')
  , h('div.clearFix', [ 
      browserImg({src: 'images/code/kumiki.gif', alt: 'asdf', css: '.col-6'})
    , h('p', 'asdfasdfasdf')
    ])
  ]

const browserImg = o => 
  h(`figure.m0.relative.browserImage${o.css}` , [
    h('div.absolute.top-0.left-0.fullWidth', [
        h('i.circle.absolute')
      , h('i.circle.absolute')
      , h('i.circle.absolute')
    ])
  , h('img', {props: {src: o.src, alt: o.alt}})
  ])


module.exports  = _ => h('section.p1', id('code'), body())

