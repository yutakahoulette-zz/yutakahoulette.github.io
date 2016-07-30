import flyd from 'flyd'
import R from 'ramda'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import images from './images'

flyd.mergeAll = require('flyd/module/mergeall')
flyd.filter = require('flyd/module/filter')

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
  h('main.pr1', [
    h('section.flex.flex-wrap.content-end', korematsu())
    ]
  )

const korematsu = _ => 
  R.map(x => imageBox('korematsu', x, true, 'col-6'), images.korematsu) 

const imageBox = (directory, imageObj, expand, className) =>
  h(`div.pb1.pl1${className ? '.' + className : ''}`, [
    h('figure.mo.relative', [
      h('img', { 
        props: {
          src: `images/${directory}/${imageObj.fileName}.jpg`
        , alt: imageObj.title 
        }
      , 
        on: {click: openModal}
      })
    , h('figcaption', imageObj.title) 
    ])
  ])

const header = _ => 
  h('header.p1.mb2', [
    h('h1', 'Yutaka Houlette')    
  , h('h2', 'Design  Code  Illustration')
  , h('a', 'mail@yutakahoulette.com')
  ])

const openModal = e => {
  let image = e.target
  data.modalData.src = image.getAttribute('src')
  data.modalData.alt = image.getAttribute('alt')
  render()
}

const imageModal = (modalData) => 
   h('div.fixed.bottom-0.right-0.top-0.left-0', 
    {style: {background: 'rgba(0,0,0,0.7)'}}
  , [h('div.flex.justify-center.items-center.m0.p1'
    , {
        style: {height: '100%'}
      , on: {click: closeModal}
      }
    , [h('img', {props: {src: modalData.src, alt: modalData.alt}})])
    ]
  )

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
