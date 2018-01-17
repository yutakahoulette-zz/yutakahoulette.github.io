import link from './link'
import h from 'snabbdom/h'

module.exports = _ => 
  h('header.p-1.my-1', [
    h('h1.h3.my-0.mr-2.sans.inline-block.line-height-1', 'Yutaka Houlette')    
  , h('div.mt-1.sans'
    , [ 
        link('.mr-2.smooth', '#illustration', 'Illustration')
      , link('.mr-2.smooth', '#code', 'Code/Design')
      , link('.mr-2.smooth', '#about', 'About')
      ]
    )
  ])

