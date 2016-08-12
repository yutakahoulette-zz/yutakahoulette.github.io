import h from 'snabbdom/h'
import link from './link'
import id from './id'

let body = _ =>
  [
    h('hr')
  , h('h3.mb1.italic', 'Code')
  , article({left: true, title: 'Kumiki', p: 'asdf'
    , img: {src: 'images/code/kumiki.gif', alt: 'asdf'}})
  ]


const article = o => {
  const padding = left => left ? '.pr2' : '.pl2'
  const textAlign = left => left ? '.right-align' : ''

  let img = browserImg(o.img)
  let txt = h(`figcation.table-cell.align-middle.col-5${padding(!o.left)}${textAlign(!o.left)}`, [ 
    h('h4', o.title)
  , h('p', [o.p]) 
  ])
  let content = [o.left ? img : txt, o.left ? txt : img]
  return h('article.table.fullWidth', content) 
}


const browserImg = o => 
  h('figure.m0.relative.browserImage.col-7.table-cell', [
    h('div.absolute.top-0.left-0.fullWidth', [
        h('i.circle.absolute')
      , h('i.circle.absolute')
      , h('i.circle.absolute')
    ])
  , h('img', {props: o})
  ])


module.exports  = _ => h('section.p1', id('code'), body())

