import h from 'snabbdom/h'
import link from './link'
import id from './id'

let body = _ => [
  h('hr.mt-0')
, h('h2.mb-1.italic', 'About')
, h('article.readable.smooth.mb-4'
    , [
        h('p', "I'm an illustrator and front-end engineer based in Oakland, California.")
      , h('p', [
          "During the day, I design and build user interfaces at "
        , link('', 'https://commitchange.com', 'CommitChange', true)
        , ",  a fundraising platform for nonprofits and social-good companies. I'm fortunate enough to have the flexibility to take on occasional freelance projects. Most recently, I illustrated a "
        , link('', 'https://www.kirkusreviews.com/book-reviews/laura-atkins/fred-korematsu-speaks-up/', 'Kirkus starred book', true)
        , " about the Japanese-American civil rights hero Fred Korematsu, titled "
        , link('', "https://www.amazon.com/Fred-Korematsu-Speaks-Fighting-Justice/dp/1597143685", "'Fred Korematsu Speaks Up'", true)
        , ". Some other clients include Smithsonian Magazine and Orion Magazine."
        ])
      , h('p', "In addition to illustration, I'm passionate about interaction design, functional programming, and data visualization.")
      , h('p.mb-1', "Please drop me a line if you'd like to work together.")
      , h('ul.mt-0', [
          h('li', '415-940-5012')
        , h('li', [h('a', {props: {href: 'mailto:yutakahoulette@gmail.com'}}, "yutakahoulette@gmail.com")])
        ])
      ]
    )
]

module.exports  = _ => h('section.px1.mt2.mb4', id('about'), body())

