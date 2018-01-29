import h from 'snabbdom/h'

module.exports = (cssClass, href, text, targetBlank) => {
  let props = targetBlank
    ? {target: '_blank', href: href}
    : {href: href}
  return h(`a${cssClass || ''}`, {props: props}, text)
}
