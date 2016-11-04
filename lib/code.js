import h from 'snabbdom/h'

import link from './link'
import fadeIn from './fade-in'
import id from './id'

let kumikiP = ['Kumiki is a web app for making polyrhythmic loops. It uses the Web Audio API to generate sounds and Virtual Dom for rendering.', h('br'), link('', 'http://kumiki.audio', 'See it here.', true)]

let body = _ =>
  [
    h('hr.pb3')
  , article({left: true, title: 'Kumiki', p: kumikiP 
    , img: {src: 'images/code/kumiki.gif', alt: 'asdf'}})
  , article({left: false, title: 'Should I?', p: 'asdf'
    , img: {src: 'images/code/should_i.gif', alt: 'asdf'}})
  , article({left: true, title: 'Scapeland', p: 'asdf'
    , img: {src: 'images/code/scapeland.gif', alt: 'asdf'}})
  , article({left: false, title: 'Text to Marbles', p: 'asdf'
    , img: {src: 'images/code/marbles.png', alt: 'asdf'}})
  , article({left: true, title: 'Gestalt Weather', p: 'asdf'
    , img: {src: 'images/code/gestalt.png', alt: 'asdf'}})
  ]

const padding = left => left ? '.pr2' : '.pl2'
const float = left => left ? '.left' : '.right'
const align = left => left ? '.right-align' : ''

const article = o => {
  let img = browserImg(o.img)
  let txt = h(`figcation.smooth.readable.col-5${padding(!o.left)+float(!o.left)+align(!o.left)}`, [ 
    h('h4.sans', o.title)
  , h('p', o.p) 
  ])
  let content = [txt, img]
  return h('article.clearfix.mb4', content) 
}


const browserImg = o => 
  h(`figure.m0.o0.transO--slow.relative.browserImage.col-7${float(o.left)}`, [
    h('div.absolute.top-0.left-0.fullWidth', [
        h('i.circle.absolute')
      , h('i.circle.absolute')
      , h('i.circle.absolute')
    ])
  , h('img', {props: o, hook: {insert: fadeIn}})
  ])


module.exports  = _ => h('section.p1.my3', id('code'), body())

