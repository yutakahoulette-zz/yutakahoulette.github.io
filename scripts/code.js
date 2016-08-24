import h from 'snabbdom/h'

import link from './link'
import fadeIn from './fade-in'
import id from './id'

let body = _ =>
  [
    h('hr')
  , article({left: true, title: 'Kumiki', p: 'asdf'
    , img: {src: 'images/code/kumiki.gif', alt: 'asdf'}})
  , article({left: false, title: 'Should I?', p: 'asdf'
    , img: {src: 'images/code/should_i.gif', alt: 'asdf'}})
  , article({left: true, title: 'Scapeland', p: 'asdf'
    , img: {src: 'images/code/scapeland.gif', alt: 'asdf'}})
  , article({left: false, title: 'Gestalt Weather', p: 'asdf'
    , img: {src: 'images/code/gestalt.png', alt: 'asdf'}})
  ]

const padding = left => left ? '.pr2' : '.pl2'
const float = left => left ? '.left' : '.right'
const align = left => left ? '.right-align' : ''

const article = o => {

  let img = browserImg(o.img)
  let txt = h(`figcation.col-5${padding(!o.left)+float(!o.left)+align(!o.left)}`, [ 
    h('h4', o.title)
  , h('p', [o.p]) 
  ])
  let content = [txt, img]
  return h('article.clearfix.mb3', content) 
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


module.exports  = _ => h('section.p1', id('code'), body())

