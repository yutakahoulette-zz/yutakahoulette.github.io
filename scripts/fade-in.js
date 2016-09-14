import loaded from 'imagesloaded'

module.exports = x => {
  loaded(x.elm, i => {
    let p = i.images[0].img.parentElement.parentElement
    p.querySelector('figure').style.opacity = '1'
    p.querySelector('.loader-wrapper').style.opacity = '0'
  })
}

