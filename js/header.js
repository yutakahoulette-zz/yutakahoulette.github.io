import link from './link'
import h from 'snabbdom/h'

module.exports = _ =>
  h('header.p-1.mb-2', [
    h('h1.h2.mb-1', 'Yutaka Houlette'),
    h('article.pt-2.readable', [
      h('p.bump', "Hello! I'm a developer/designer and occasional illustrator based in Oakland, California."),
      h('p.bump', [
        "I'm currently working at Media Cause",
        ",  where I'm helping to build an activism tool called ",
        link('', 'https://rallystarter.com', 'Rally Starter', true),
        '. ',
        'My most recent illustration project is a book about the Japanese-American civil rights hero Fred Korematsu, titled ',
        link('', 'https://www.amazon.com/Fred-Korematsu-Speaks-Fighting-Justice/dp/1597143685', "'Fred Korematsu Speaks Up'", true),
        '.'
      ])
    ])
  ])
