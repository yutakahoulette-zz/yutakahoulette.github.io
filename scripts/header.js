import link from './link'
import h from 'snabbdom/h'

module.exports = _ => 
  h('header.p1.mt1.mb2', [
    h('h1.h2.my0.mr2.inline-block', 'Yutaka Houlette')    
  , h('h2.h4.regular.italic.my0.inline-block', 'Illustrator & UX Engineer')
  , h('div.mt1'
    , [ 
        link('.mr2.smooth', '#illustration', 'Illustration')
      , link('.mr2.smooth', '#code', 'Code/Design')
      , link('.mr2.smooth', '#about', 'About')
      ]
    )
  ])

