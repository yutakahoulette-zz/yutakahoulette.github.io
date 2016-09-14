let images = {}

const korematsuImages = _ => {
  let arr = []
  for(let i=1; i <= 12; i++) {
    let obj = {
      src: `illustration/korematsu-ch-${i}-800`
    , title: `Fred Korematsu Speaks Up - Chapter ${i}`
    }
    arr.push(obj)
  }
  return arr
}

const img = (src, title) => ({src: `illustration/${src}-800`, title: title })

images.korematsu = korematsuImages()

images.illo = [
  img('whale-fire', 'Whale Fire - for Meatpaper')
, img('how-we-eat', 'How We Eat - for Meatpaper')
, img('wapato', 'Wapato - for Orion')
, img('mixtum', 'Mixtum - with Heidi Gustafson')
, img('flourish', 'Flourish (栄)')
, img('si', 'Cloud Squeeze - for Smithsonian Magazine')
, img('demai', 'Demai - for Ganga Skateboards')
, img('moonbeams', 'Moonbeams')
, img('arnie', 'Path to College - for Pittsburgh Promise')
, img('eri-yamamoto', 'Poster for Eri Yamamoto')
, img('homeless-dance', 'Take This Waltz')
]

module.exports = images

