<script setup lang="ts">
  import ThemeManager from '@/components/ui/themes/ThemeManager.vue'
  import { useLayout } from '@/libs/composables/layout'

  const { layoutComponent } = useLayout()
</script>

<template>
  <ThemeManager>
    <Component :is="layoutComponent" />
  </ThemeManager>
</template>

<style lang="scss">
  @import '@/assets/sass/_main.scss';
</style>
