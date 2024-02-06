import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import EmptyLayout from '@/components/layouts/EmptyLayout.vue'

export function useLayout() {
  const route = useRoute()

  const layoutComponent = computed(() => {
    if (route.name === null) return EmptyLayout

    return route.meta.layout || DefaultLayout
  })

  return { layoutComponent }
}
