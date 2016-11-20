import loaded from 'imagesloaded'

module.exports = (x, cb) => {
  loaded(x.elm, i => {
    x.elm.style.visibility = 'visible'
    x.elm.style.opacity = '1'
    cb && cb()
  })
}

