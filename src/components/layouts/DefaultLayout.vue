<script setup lang="ts">
  import BemTransition from '../ui/transitions/BemTransition.vue'
</script>

<template>
  <main class="layout__main">
    <RouterView v-slot="{ Component }">
      <BemTransition name="page">
        <Component :is="Component" />
      </BemTransition>
    </RouterView>
  </main>
</template>

<style scoped lang="scss">
  .layout {
    &__main {
      position: relative;
      z-index: 0;
    }
  }
</style>
