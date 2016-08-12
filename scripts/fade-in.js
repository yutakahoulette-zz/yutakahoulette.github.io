import loaded from 'imagesloaded'

module.exports = x => {
  loaded(x.elm, i => {
    i.images[0].img.parentElement.style.opacity = '1'
  })
}

