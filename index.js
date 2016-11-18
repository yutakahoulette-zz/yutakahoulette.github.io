// npm
import R from 'ramda'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'

// local
import images from './lib/images'
import header from './lib/header'
import code from './lib/code'
import about from './lib/about'
import fadeIn from './lib/fade-in'
import brickIt from './lib/brick-it'
import link from './lib/link'
import id from './lib/id'

let vnode

const data = {modalData: {}}

const patch = snabbdom.init([
  require('snabbdom/modules/class')
, require('snabbdom/modules/props')
, require('snabbdom/modules/style')
, require('snabbdom/modules/eventlisteners')
, require('snabbdom/modules/attributes')
])

const isNarrow = window.innerWidth <= 400

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
    , largeImages()
    ]
  )

const illustration = _ =>
  h('section.p05', id('illustration')
  , [ h('div', R.map(x => imgBox(x, '.col-4'), images.korematsu))
    , h('div', {
        hook: {insert: isNarrow ? _ => '' : brickIt}}
      , R.map(x => imgBox(x), images.illo))
    ]
  )

const imgBox = (o, className) =>
  h(`div.inline-block.relative.${className ? className : ''}`, [
    h('figure.m-0.opacity-0.transO--slow.relative', [
      h(`img.p05${!isNarrow ? '.cursor-pointer' : ''}`, { 
        props: { src: `images/${o.src}.jpg`, alt: o.title }
      , attrs: {'data-large-image': `images/${o.large}.jpg`}
      , on: {click: openModal}
      , hook: {insert: fadeIn}
      })
    , h('figcaption.absolute.sans.p-1.bg-scrim-2.opacity-0.transO.line-height-2', o.title) 
    ])
  ])

const hiddenImg = o => h('img.hide', {props: {src: `images/${o.large}.jpg`}}) 

const largeImages = _ => 
  h('div', [
    h('div', R.map(hiddenImg, images.korematsu))
  , h('div', R.map(hiddenImg, images.illo))
  ])

const imageModal = (modalData) => 
  h('div.fixed.bottom-0.right-0.top-0.left-0.bg-scrim-2.opacity-0.transO'
  , { style: { delayed: { opacity: '1'}, remove: {opacity: '0'}}
    , on: {click: closeModal}
    }
  , [ h('div.width-full.height-full.center.p-2'
      , [h('img.shadow-4.verticallyCenter.fullMaxHeight', {props: {src: modalData.src, alt: modalData.alt}})]
      )
    ]
  )

const openModal = e => {
  if(isNarrow) return
  let image = e.target
  data.modalData.src = image.getAttribute('data-large-image')
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

