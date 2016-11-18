import h from 'snabbdom/h'
import R from 'ramda'

import link from './link'
import fadeIn from './fade-in'
import id from './id'

const mapWithIndex = R.addIndex(R.map)

const projects = [
  { title: 'Kumiki'
  , desc: ['Kumiki is a web app for making polyrhythmic loops. It uses the Web Audio API to generate sounds and Virtual Dom for rendering.', h('br'), link('', 'http://kumiki.audio', 'See it here.', true)] 
  , imgSrc: 'images/code/kumiki.gif'
  }
, { title: 'Should I?'
  , desc: 'asdf'
  , imgSrc: 'images/code/should_i.gif'
  }
, { title: 'Scapeland'
  , desc: 'asdf'
  , imgSrc: 'images/code/scapeland.gif'
  }
, { title: 'Text to Marbles'
  , desc: 'asdf'
  , imgSrc: 'images/code/marbles.png'
  }
, { title: 'Gestalt Weather'
  , desc: 'asdf'
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
    h('div.absolute.top-0.left-0.fullWidth', [
        h('i.circle.absolute')
      , h('i.circle.absolute')
      , h('i.circle.absolute')
    ])
  , h('img', {props: o, hook: {insert: fadeIn}})
  ])


module.exports  = _ => h('section.p-1', id('code'), body())

