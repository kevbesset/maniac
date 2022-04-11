<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
  import EmptyLayout from '@/components/layouts/EmptyLayout.vue'
  import ThemeLayer from '@/components/ui/layers/ThemeLayer.vue'

  const route = useRoute()

  const layoutComponent = computed(() => {
    if (route.name === null) return EmptyLayout

    return route.meta.layout || DefaultLayout
  })
</script>

<template>
  <ThemeLayer>
    <Component :is="layoutComponent" />
  </ThemeLayer>
</template>

<style lang="scss">
  @import '@/assets/sass/_main.scss';
</style>
