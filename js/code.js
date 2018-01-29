import h from 'snabbdom/h'
import R from 'ramda'

import link from './link'
import fadeIn from './fade-in'

const mapWithIndex = R.addIndex(R.map)

const a = (text, url) => link('', url, text, true)

const projects = [
  { title: 'Kumiki',
    desc: [a('Kumiki', 'http://kumiki.audio'), ' is a web app for making polyrhythmic loops. It uses the Web Audio API to generate sounds.'],
    imgSrc: 'images/code/kumiki.gif'
  },
  { title: 'autocomplete',
    desc: 'autocomplete',
    imgSrc: 'images/code/autocomplete.gif'
  },
  { title: 'mixtum',
    desc: 'mixtum',
    imgSrc: 'images/code/mixtum.gif'
  },
  { title: 'ff-wizard',
    desc: 'ff-wizard',
    imgSrc: 'images/code/ff-wizard.gif'
  },
  { title: 'ff-dashboard',
    desc: 'ff-dashboard',
    imgSrc: 'images/code/ff-dashboard-loop.gif'
  },
  { title: 'Should I?',
    desc: [a('Should I?', 'http://yutakahoulette.com/should_i'), ' is a web app for quantifying and visualizing pros and cons.'],
    imgSrc: 'images/code/should_i.gif'
  },
  { title: 'Scapeland',
    desc: [a('Scapeland', 'http://scapeland.herokuapp.com/'), ' is a drawing experiment that stitches together drawings into a continuous, collaborative landscape (this project has not been maintained for a few years).'],
    imgSrc: 'images/code/scapeland.gif'
  },
  { title: 'Text to Marbles',
    desc: [a('Text to Marbles', 'http://yutakahoulette.com/text-to-marbles/demo/'), " takes a string and converts it to a HTML canvas drawing of stream ‘marbles’. It's intended to augment documentation for stream-based libraries like Rx and Flyd."],
    imgSrc: 'images/code/marbles.png'
  },
  { title: 'Gestalt Weather',
    desc: [a('Gestalt Weather', 'http://gestalt-weather.herokuapp.com/'), " is a weather visualization that attempts to show a lot of data in a naive and simple style. It's my first attempt at building a web app."],
    imgSrc: 'images/code/gestalt.png'
  }
]

const article = (project, i) => {
  const isLeft = i % 2 === 0
  const img = browserImg({src: project.imgSrc, alt: project.title})
  const txt = h('figcaption.col-5.color-black',
    {class: {
      'pr-3': !isLeft,
      'pl-3': isLeft,
      'left': !isLeft,
      'right': isLeft,
      'align-right': !isLeft
    }},
    [
      h('h4', project.title),
      h('p', project.desc)
    ]
  )
  const content = [txt, img]
  return h('article.clearfix.mb-4.pb-2', content)
}

const browserImg = o =>
  h('figure.m-0.relative.browserImage.col-7.opacity-0.transO', {hook: {insert: fadeIn}}, [
    h('div.absolute.top-0.left-0.width-full', [
      h('i.circle.absolute'),
      h('i.circle.absolute'),
      h('i.circle.absolute')
    ]),
    h('img', {props: o})
  ])

module.exports = _ =>
  h('section.p-2', [
    h('h3.m-0', 'Coding projects'),
    h('div.pt-4', mapWithIndex(article, projects))
  ])
