import { computed, nextTick, onMounted, onUnmounted, reactive, type Ref } from 'vue'

export default function useTracer(trackRef: Ref<HTMLElement>, trackSelector: string) {
  const tracerPosition = reactive({
    position: 0,
    width: 0
  })

  const observer = new MutationObserver(refresh)

  const styles = computed(() => ({
    transform: `translate3d(${tracerPosition.position}px, 0, 0)`,
    width: `${tracerPosition.width}px`
  }))

  function refresh() {
    nextTick(() => {
      if (trackRef.value) {
        const activeEl = trackRef.value.querySelector(trackSelector) as HTMLElement

        if (activeEl) {
          tracerPosition.position = activeEl.offsetLeft
          tracerPosition.width = activeEl.offsetWidth
        }
      }
    })
  }

  onMounted(() => {
    observer.observe(trackRef.value, {
      childList: true
    })
    window.addEventListener('resize', refresh)
    refresh()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', refresh)
    observer.disconnect()
  })

  return {
    styles,
    refresh
  }
}
