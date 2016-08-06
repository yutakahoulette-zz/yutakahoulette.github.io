import h from 'snabbdom/h'
import link from './link'
import id from './id'

let body = _ => [
  h('hr')
, h('h3.mb1.italic', 'About')
, h('div.readable.smooth'
    , [
        h('p', "I'm an illustrator and UX engineer based in Oakland, California.")
      , h('p', [
          "During the day, I design and build user interfaces at "
        , link('', 'https://commitchange.com', 'CommitChange', true)
        , " a fundraising platform for nonprofits and social-good companies. I'm fortunate enough to have the flexibility to take on occasional freelance projects. Most recently, I illustrated a book about the Japanese-American civil rights hero, "
        , link('', "https://en.wikipedia.org/wiki/Fred_Korematsu", 'Fred Korematsu', true)
        , " (forthcoming from Heyday Books). Some other clients include Smithsonian Magazine and Orion Magazine."
        ])
      , h('p', "In addition to illustration, I'm passionate about interaction design, functional programming, and data visualization.")
      , h('p.mb1', "Please drop me a line if you'd like to work together.")
      , h('ul.mt0', [
          h('li', '415-940-5012')
        , h('li', [h('a', {props: {href: 'mailto:mail@yutakahoulette.com'}}, "mail@yutakahoulette.com")])
        ])
      ]
    )
]

module.exports  = _ => h('section.pl1', id('about'), body())

