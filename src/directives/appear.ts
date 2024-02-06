import { DirectiveBinding } from 'vue'

interface AppearOptions {
  animationName?: string
  duration?: 'slow' | 'slower' | 'fast' | 'faster'
}

const appear = (el: HTMLElement, bindings: DirectiveBinding) => {
  let animationName
  let options: AppearOptions = {}

  if (typeof bindings.value === 'undefined') {
    animationName = 'fadeInUp'
  } else if (typeof bindings.value === 'string') {
    animationName = bindings.value
  } else {
    animationName = bindings.value?.animation || 'fadeInUp'
    options = bindings.value
  }

  el.classList.add(`animate__${animationName}`)
  if (options?.duration) {
    el.classList.add(`animate__${options.duration}`)
  }
  el.classList.add('animate__animated')
}

export default appear