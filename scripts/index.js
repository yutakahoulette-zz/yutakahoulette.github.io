import flyd from 'flyd'
import R from 'ramda'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import images from './images'

flyd.mergeAll = require('flyd/module/mergeall')
flyd.filter = require('flyd/module/filter')

let vnode
let data = {}

const patch = snabbdom.init([
  require('snabbdom/modules/class')
, require('snabbdom/modules/props')
, require('snabbdom/modules/style')
, require('snabbdom/modules/eventlisteners')
, require('snabbdom/modules/attributes')
])

const view = data =>
  h('div.container', [
      header()
    , main(data)
  ])

const main = data =>
  h('main', [
    h('section.flex.flex-wrap.content-end', korematsu(data))
    ]
  )

const korematsu = data => 
  R.map(x => imageBox('korematsu', 'jpg', x, true, 'col-6'), images.korematsu) 

const imageBox = (directory, fileType, imageObj, expand, className) =>
  h('figure', {props: {className: className}}, [
    h('img', {props: {
      src: `images/${directory}/${imageObj.fileName}.${fileType}`
    , alt: imageObj.title
    }})
  , h('figcaption', imageObj.title) 
  ])

const header = _ => 
  h('header', [
    h('h1', 'Yutaka Houlette')    
  , h('h2', 'Design  Code  Illustration')
  , h('a', 'mail@yutakahoulette.com')
  ])

const render = _ => 
  vnode = patch(vnode, view(data));

window.addEventListener('DOMContentLoaded', () => {
  let container = document.getElementById('container')
  vnode = patch(container, view(data))
  render()
})
