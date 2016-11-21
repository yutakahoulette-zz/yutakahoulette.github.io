import h from 'snabbdom/h'
import link from './link'
import id from './id'

let body = _ => [
  h('hr.mt-0')
, h('h2.mb-1.italic', 'About')
, h('article.readable.smooth'
    , [
        h('p', "I'm a Japanese-American illustrator and front-end engineer based in Oakland, California.")
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
      , h('span.bold', "Email: ")
      , h('a', {props: {href: 'mailto:yutakahoulette@gmail.com'}}, "yutakahoulette@gmail.com")
      ]
    )
]

module.exports  = _ => h('section.px-1.mt-2', id('about'), body())

