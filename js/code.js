import h from 'snabbdom/h'
import R from 'ramda'

import link from './link'
import fadeIn from './fade-in'

const mapWithIndex = R.addIndex(R.map)

const a = (text, url) => link('', url, text, true)

const projects = [
  { title: 'Design systems and UI components',
    desc: [
      "I've helped put together design systems, as well as build a majority of the UI components in them, for ",
      a('Rally Starter', 'https:rallystarter.com/design-system'),
      ' and ',
      a('CommitChange', 'https:commitchange.com/ui-demo'),
      '.'
    ],
    imgSrc: 'images/code/design-system.png'
  },
  { title: 'Kumiki',
    desc: [a('Kumiki', 'http://kumiki.audio'), ' is a web app for making polyrhythmic loops. It uses the Web Audio API to generate sounds.'],
    imgSrc: 'images/code/kumiki.gif'
  },
  { title: 'Search and autocomplete for congress',
    desc: [
      'This component was built for ',
      a('Rally Starter', 'https:rallystarter.com'),
      ' and uses open-source data from ', 
      a('unitedstates/congress', 'https://github.com/unitedstates/congress'),
      '.'
    ],
    imgSrc: 'images/code/autocomplete.gif'
  },
  { title: 'Mixtum website',
    desc: [
      a('Mixtum', 'http://mixtum.space'),
      ' is a tool that selects three random symbols as prompts for creative synthesis. It was originally created as a board game for preschoolers.'
    ],
    imgSrc: 'images/code/mixtum.gif'
  },
  { title: 'FF-dashboard',
    desc: [
      a('FF-dashboard', 'https://github.com/flimflamjs/ff-dashboard'),
      ' is a general-purpose dashboard component that uses ',
      a('Snabbdom', 'https://github.com/snabbdom/snabbdom'),
      ', which makes it super quick to render, ', 
      ' and ',
      a('Flyd', 'https://github.com/paldepind/flyd'),
      ', which makes it easy to handle async code.'
    ],
    imgSrc: 'images/code/ff-dashboard.gif'
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
      h('h4.mt-0', project.title),
      h('p', project.desc)
    ]
  )
  const content = [txt, img]
  return h('article.clearfix.mb-4.browserImageWrapper', content)
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
  h('section.p-1', [
    h('h3.m-0', 'Coding projects'),
    h('div.pt-4.no-margin-last-child.pb-1', mapWithIndex(article, projects))
  ])
