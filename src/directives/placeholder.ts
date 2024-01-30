import { DirectiveBinding } from 'vue'

const BLOCK_CLASS = 'ct-loading-placeholder'

interface PlaceholderOptions {
  width?: string | number
  multiline?: number
}

class Placeholder {
  el: HTMLElement
  originalBindings!: DirectiveBinding
  loading!: boolean
  options?: PlaceholderOptions

  constructor(el: HTMLElement, bindings: DirectiveBinding) {
    if (isSelfClosing(el)) {
      console.warn('Placeholder directive does not work on self closing tag')
    }

    this.el = el
    this.bindings = bindings

    if (this.loading) {
      this.init()
    } else {
      this.destroy()
    }
  }

  get lines() {
    return this.options?.multiline || 1
  }

  get lineClass() {
    return `${BLOCK_CLASS}__line`
  }

  get bindings() {
    return this.originalBindings
  }

  set bindings(bindings: DirectiveBinding) {
    this.originalBindings = bindings

    const { value } = bindings
    if (typeof value === 'boolean') {
      this.loading = !!value
    } else {
      this.loading = value.loading
      this.options = value.options
    }
  }

  init() {
    this.el.classList.add(BLOCK_CLASS)

    if (this.lines === 1) {
      this.createLine(this.el)
    } else {
      for (let i = 0; i < this.lines; i++) {
        const line = this.createLine()

        this.el.appendChild(line)
      }
    }
  }

  destroy() {
    this.el.classList.remove(BLOCK_CLASS)
    this.el.classList.remove(this.lineClass)
    this.el.style.removeProperty('width')

    if (this.lines > 1) {
      this.el
        .querySelectorAll(`:scope > .${this.lineClass}`)
        .forEach((line) => {
          line.remove()
        })
    }
  }

  createLine(el?: HTMLElement) {
    const line = el || document.createElement('span')
    line.classList.add(this.lineClass)

    if (typeof this.options?.width !== 'undefined') {
      line.style.width =
        typeof this.options.width === 'string'
          ? this.options.width
          : `${this.options.width}px`
    }

    return line
  }
}

const placeholder = (el: HTMLElement, bindings: DirectiveBinding) =>
  new Placeholder(el, bindings)

function isSelfClosing(el: HTMLElement) {
  return [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
  ].includes(el.tagName.toLowerCase())
}

export default placeholder
