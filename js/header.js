import link from './link'
import h from 'snabbdom/h'

const a = (text, url) => link('', url, text, true)

module.exports = (_) =>
  h('header.p-1.mb-2.mt-4', [
    h('h1.h3.mb-1', 'Yutaka Houlette'),
    h('article.pt-2.readable', [
      h(
        'p.bump',
        "I'm a web developer and occasional illustrator based in Oakland, California."
      ),
      h('p.bump', [
        'My most recent illustration project is a book about the Japanese-American civil rights hero Fred Korematsu, titled ',
        a(
          "'Fred Korematsu Speaks Up'",
          'https://www.amazon.com/Fred-Korematsu-Speaks-Fighting-Justice/dp/1597143685'
        ),
        '. ',
        'I enjoy building ',
        a('design systems', 'https://rallystarter.com/design-system'),
        ' and using code to ',
        a(
          'make interactive art',
          'https://yutakahoulette.gitlab.io/sketchbook/?sketch=4'
        ),
        '. ',
        "I'm currently working at Dropbox as a frontend engineer."
      ])
    ])
  ])
