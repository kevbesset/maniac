const BOUNCY_CLASS_NAME = 'bouncy'

const bouncy = {
  mounted(el: HTMLElement) {
    el.addEventListener('click', () => {
      if (!el.classList.contains(BOUNCY_CLASS_NAME)) {
        el.classList.add(BOUNCY_CLASS_NAME)

        setTimeout(() => {
          el.classList.remove(BOUNCY_CLASS_NAME)
        }, 500)
      }
    })
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('click', () => {
      el.classList.remove(BOUNCY_CLASS_NAME)
    })
  },
}

export default bouncy
