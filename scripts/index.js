import R from 'ramda'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import images from './images'

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

const header = _ => 
  h('header.p1.mb2', [
    h('h1', 'Yutaka Houlette')    
  , h('h2', 'Design  Code  Illustration')
  , h('a', 'mail@yutakahoulette.com')
  ])

const main = _ =>
  h('main.pr1', [
    h('section.flex.flex-wrap.content-end', korematsu())
  , h('section.flex.flex-wrap.content-end', [imageBox({src: 'si-clouds', title: 'asdf'}, true)])
    ]
  )

const korematsu = _ => 
  R.map(x => imageBox(x, true, 'col-6'), images.korematsu) 

const imageBox = (imageObj, expand, className) =>
  h(`div.pb1.pl1${className ? '.' + className : ''}`, [
    h('figure.m0.relative', [
      h('img', { 
        props: {
          src: `images/${imageObj.src}.jpg`
        , alt: imageObj.title 
        }
      , class: {pointer: expand}
      , on: {click: openModal}
      })
    , h('figcaption.absolute.bottom-0.left-0.p1.fullWidth.scrim.o0.transO', imageObj.title) 
    ])
  ])

const imageModal = (modalData) => 
  h('div.modal.fixed.bottom-0.right-0.top-0.left-0.scrim.o0.transO', {
    style: {
      delayed:  { opacity: '1'}
    , remove: {opacity: '0'}
    }
  }
  , [h('div.flex.justify-center.items-center.fullHeight.p2'
    , { on: {click: closeModal}}
    , [h('img', {props: {src: modalData.src, alt: modalData.alt}})])
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

