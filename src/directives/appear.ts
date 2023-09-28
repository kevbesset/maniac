import { DirectiveBinding } from 'vue'

export const appear = (el: HTMLElement, bindings: DirectiveBinding) => {
  const animation = bindings.value || 'fadeInUp'
  el.classList.add(`animate__${animation}`)
  el.classList.add('animate__slow')
  el.classList.add('animate__animated')
}
