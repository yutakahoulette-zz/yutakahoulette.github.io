import h from 'snabbdom/h'
import link from './link'
import id from './id'

let body = _ => [
  h('hr.mt-0')
, h('h2.mb-1.sans', 'About')
, h('article.readable.smooth'
    , [
        h('p', "I'm an illustrator and front-end engineer based in Oakland, California.")
      , h('p', [
          "I'm currently working at "
        , link('', 'https://mediacause.org', 'Media Cause', true)
        , ",  where I'm helping to build an online activism tool called "
        , link('', 'https://rallystarter.com', 'Rally Starter', true)
        , '. '
        , 'My most recent illustration project is a book about the Japanese-American civil rights hero Fred Korematsu, titled '
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

