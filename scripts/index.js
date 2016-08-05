import R from 'ramda'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import images from './images'
import aboutText from './about-text'

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
  h('header.p1.my2.table.fullWidth', [
    h('div.table-cell.align-middle'
    , {style: { width: '80px'}}
    , [h('div.circle.slideShow')]
    )
  , h('div.table-cell.align-middle.pl1', [
      h('h1.h2.my0.mr2.inline-block', 'Yutaka Houlette')    
    , h('h2.h4.regular.my0.inline-block', 'Illustrator & UX Engineer')
    , h('div.mt1'
      , [ 
          h('a.mr2', 'Illustration')
        , h('a.mr2', 'Code/Design')
        , h('a.mr2', 'About')
        ]
      )
    ])
  ])

const main = _ =>
  h('main.pr1'
  , [
      h('section.clearFix', korematsu())
    , h('section'
      , [
          h('hr')
        , h('h2', 'About')
        , h('p', aboutText)
        ]
      )
    ]
  )

const korematsu = _ => 
  R.map(x => imageBox(x, true, '.col-4.left'), images.korematsu) 

const imageBox = (imageObj, expand, className) =>
  h(`div.pb1.pl1${className ? className : ''}`, [
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
  h('div.fixed.bottom-0.right-0.top-0.left-0.scrim.o0.transO'
  , {
      style: {
        delayed:  { opacity: '1'}
      , remove: {opacity: '0'}
      }
    , on: {click: closeModal}
    }
  , [
      h('div.fullWidth.fullHeight.center.p2'
      , [
          h('img.verticallyCenter'
            , {props: {src: modalData.src, alt: modalData.alt}}
          )
        ]
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

