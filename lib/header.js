import link from './link'
import h from 'snabbdom/h'

module.exports = _ => 
  h('header.p-1.my-1', [
    h('h1.h3.my-0.mr-2.inline-block.line-height-1', 'Yutaka Houlette')    
  , h('h2.h5.regular.italic.my-0.inline-block.line-height-1', 'Illustrator & Front-End Engineer')
  , h('div'
    , [ 
        link('.mr-2.smooth', '#illustration', 'Illustration')
      , link('.mr-2.smooth', '#code', 'Code/Design')
      , link('.mr-2.smooth', '#about', 'About')
      ]
    )
  ])

