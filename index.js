import R from 'ramda'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import images from './js/images'
import header from './js/header'
import fadeIn from './js/fade-in'
import brickIt from './js/brick-it'
import link from './js/link'

const data = { modalData: {} }

const patch = snabbdom.init([
  require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/style'),
  require('snabbdom/modules/eventlisteners'),
  require('snabbdom/modules/attributes')
])

const isNarrow = window.innerWidth <= 400

const view = (data) => {
  let content = [header(), main()]
  content = data.modalData.src
    ? R.concat(content, imageModal(data.modalData))
    : content
  return h('div.container.fadeIn', content)
}

const footer = () =>
  h('footer.px-1.py-3.mt-3', [
    h('hr'),
    h('ul.mt-3.list-reset', [
      h('li', [link('', 'https://github.com/yutakahoulette', 'Github', true)]),
      h('li', [
        link(
          '',
          'https://www.linkedin.com/in/yutakahoulette/',
          'LinkedIn',
          true
        )
      ]),
      h('li', ['yutakahoulette[at]gmail.com'])
    ]),
    h(
      'p.m-0.small',
      `All images copyright ©  ${new Date().getFullYear()} Yutaka Houlette`
    )
  ])

const main = (_) =>
  h('main', [h('div.p-05', [h('hr')]), illustration(), footer(), largeImages()])

const illustration = (_) =>
  h('section.p-05', [
    h('div.pt-2.pb-4', [
      h('h4.p-05.mb-2', 'Fred Korematsu Speak Up'),
      h('div', R.map((x) => imgBox(x, '.col-4'), images.korematsu))
    ]),
    h('h4.p-05.mb-2', 'Editorial and personal work'),
    h(
      'div.transO',
      {
        hook: { insert: isNarrow ? (_) => '' : brickIt },
        class: { 'opacity-0': !isNarrow }
      },
      R.map((x) => imgBox(x), images.illo)
    )
  ])

const imgBox = (o, className) =>
  h(`div.inline-block.relative.${className || ''}`, [
    h(
      'figure.m-0.relative.opacity-0.transO',
      {
        on: { click: openModal },
        class: { 'cursor-pointer': !isNarrow },
        hook: { insert: fadeIn }
      },
      [
        h('img.p-05.width-full', {
          props: { src: `images/${o.src}.jpg`, alt: o.title },
          attrs: { 'data-large-image': `images/${o.large}.jpg` }
        }),
        h(
          'figcaption.absolute.p-1.bg-scrim-2.opacity-0.transO.line-height-2',
          o.title
        )
      ]
    )
  ])

const hiddenImg = (o) =>
  h('img.hide', { props: { src: `images/${o.large}.jpg` } })

const largeImages = (_) =>
  h('div', [
    h('div', R.map(hiddenImg, images.korematsu)),
    h('div', R.map(hiddenImg, images.illo))
  ])

const imageModal = (modalData) =>
  h(
    'div.fixed.bottom-0.right-0.top-0.left-0.bg-scrim-2.opacity-0.transO',
    {
      style: {
        delayed: { opacity: '1' },
        remove: { opacity: '0' }
      },
      on: { click: closeModal }
    },
    [
      h('div.width-full.height-full.center.p-2', [
        h('img.shadow-4.verticallyCenter.fullMaxHeight', {
          props: { src: modalData.src, alt: modalData.alt }
        })
      ])
    ]
  )

const openModal = (e) => {
  if (isNarrow) return
  let image = e.target.parentElement.querySelector('img')
  data.modalData.src = image.getAttribute('data-large-image')
  data.modalData.alt = image.getAttribute('alt')
  render()
}

const closeModal = (e) => {
  if (e.target.tagName.toLocaleLowerCase() === 'img') return
  data.modalData.src = false
  render()
}

let vnode

const render = (_) => {
  vnode = patch(vnode, view(data))
}

window.addEventListener('DOMContentLoaded', () => {
  let container = document.getElementById('container')
  vnode = patch(container, view(data))
  render()
})
