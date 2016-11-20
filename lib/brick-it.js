import loaded from 'imagesloaded'
import bricks from 'image-gallery'

module.exports = x =>  {
  loaded(x.elm, i => {
    x.elm.style.opacity = '1'
    bricks(x.elm, {use: [bricks.Responsive]})
  })
}

