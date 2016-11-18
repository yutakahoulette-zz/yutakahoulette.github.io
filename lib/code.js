import h from 'snabbdom/h'
import R from 'ramda'

import link from './link'
import fadeIn from './fade-in'
import id from './id'

const mapWithIndex = R.addIndex(R.map)

const a = (text, url) => link('', url, text, true)

const projects = [
  { title: 'Kumiki'
  , desc: [a('Kumiki', 'http://kumiki.audio') , ' is a single-page app for making polyrhythmic loops. It uses the Web Audio API to generate sounds.'] 
  , imgSrc: 'images/code/kumiki.gif'
  }
, { title: 'Should I?'
  , desc: [a('Should I?', 'https://yutakahoulette.github.io/should_i') , ' is a single-page app for helping people quantify and visualize the pros and cons of their conundrums.'] 
  , imgSrc: 'images/code/should_i.gif'
  }
, { title: 'Scapeland'
  , desc: [a('Scapeland', 'http://scapeland.herokuapp.com/'), ' is a drawing experiment that stitches together individual drawings into a continuous, collaborative landscape (this project has not been maintained for a few years).']
  , imgSrc: 'images/code/scapeland.gif'
  }
, { title: 'Text to Marbles'
  , desc: [a('Text to Marbles', 'https://yutakahoulette.github.io/text-to-marbles/demo/'), " is an NPM module which takes a string and converts it to a HTML canvas drawing of stream ‘marbles’. It is intended to augment documentation for stream-based libraries like Rx and Flyd."]
  , imgSrc: 'images/code/marbles.png'
  }
, { title: 'Gestalt Weather'
  , desc: [a('Gestalt Weather', 'http://gestalt-weather.herokuapp.com/'), ' is a weather visualization app which attempts to show a dense data-set in a naive and simple style. It is my first attempt at building a web app, and so the code is pretty atrocious.']
  , imgSrc: 'images/code/gestalt.png'
  }
]

const body = _ =>
  R.concat([h('hr.mb-4.mt-3')], mapWithIndex(article, projects))

const article = (project, i) => {
  const isLeft = i % 2 === 0
  const img = browserImg({src: project.imgSrc, alt: project.title})
  const txt = h('figcation.smooth.col-5'
    , {class: {
        'pr-2' : !isLeft, 'pl-2': isLeft
      , 'left' : !isLeft, 'right': isLeft
      , 'align-right' : !isLeft
      }}
    , [ 
      h('h4.sans', project.title)
    , h('p', project.desc) 
    ])
  const content = [txt, img]
  return h('article.clearfix.mb-4', content) 
}


const browserImg = o => 
  h('figure.m-0.opacity-0.transO--slow.relative.browserImage.col-7', [
    h('div.absolute.top-0.left-0.width-full', [
        h('i.circle.absolute')
      , h('i.circle.absolute')
      , h('i.circle.absolute')
    ])
  , h('img', {props: o, hook: {insert: fadeIn}})
  ])


module.exports  = _ => h('section.p-1', id('code'), body())

