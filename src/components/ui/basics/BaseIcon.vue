<script setup lang="ts">
  defineProps<{
    name: string
    fill?: boolean
  }>()
</script>

<template>
  <span
    class="icon icon--material"
    :class="{
      'icon--fill': fill
    }"
    >{{ name }}</span
  >
</template>

<style scoped lang="scss">
  @import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
  .icon {
    vertical-align: middle;

    &--material {
      font-family: 'Material Symbols Outlined';
      font-weight: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    &--fill {
      font-variation-settings: 'FILL' 1;
    }
  }
</style>
