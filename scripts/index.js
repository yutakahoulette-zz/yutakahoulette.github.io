// npm
import R from 'ramda'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import bricks from 'image-gallery'

// local
import images from './images'
import header from './header'
import code from './code'
import about from './about'
import fadeIn from './fade-in'
import brickIt from './brick-it'
import link from './link'
import id from './id'

let vnode
let data = {modalData: {}}

const patch = snabbdom.init([
  require('snabbdom/modules/class')
, require('snabbdom/modules/props')
, require('snabbdom/modules/style')
, require('snabbdom/modules/eventlisteners')
, require('snabbdom/modules/attributes')
])

const view = data => {
  let content = [header(), main()]
  content = data.modalData.src
    ? R.concat(content, imageModal(data.modalData)) 
    : content
  return h('div.container', content)
}

const main = _ =>
  h('main'
  , [
      illustration()
    , code()
    , about()
    ]
  )

const illustration = _ =>
  h('section.mt3', id('illustration')
  , [ h('h3.italic.px1', 'Illustration') 
    , h('div.clearFix.ml1', R.map(x => imgBox(x, '.col-4.left'), images.korematsu))
    , h('div.ml1', {
        hook: {insert: brickIt}}
      , R.map(x => imgBox(x), images.illo))
    ]
  )


const imgBox = (o, className) =>
  h(`div.inline-block.mb1${className ? className : ''}`, [
    h('figure.m0.o0.transO--slow.relative.inline-block', [
    h('img.pointer.pr1', { 
      props: {src: `images/${o.src}.jpg`, alt: o.title}
    , on: {click: openModal}
    , hook: {insert: fadeIn}
    })
    , h('figcaption.absolute.bottom-0.sans.smooth.h6.left-0.p1.scrim.o0.transO', o.title) 
    ])
  ])


const imageModal = (modalData) => 
  h('div.fixed.bottom-0.right-0.top-0.left-0.scrim.o0.transO'
  , { style: { delayed: { opacity: '1'}, remove: {opacity: '0'}}
    , on: {click: closeModal}
    }
  , [ h('div.fullWidth.fullHeight.center.p2'
      , [h('img.dropShadow.verticallyCenter', {props: {src: modalData.src, alt: modalData.alt}})]
      )
    ]
  )

const openModal = e => {
  let image = e.target
  data.modalData.src = image.getAttribute('src')
  data.modalData.alt = image.getAttribute('alt')
  render()
}

const closeModal = e => {
  if(e.target.tagName.toLocaleLowerCase() === 'img') return
  data.modalData.src = false
  render()
}

const render = _ => vnode = patch(vnode, view(data))

window.addEventListener('DOMContentLoaded', () => {
  let container = document.getElementById('container')
  vnode = patch(container, view(data))
  render()
})

