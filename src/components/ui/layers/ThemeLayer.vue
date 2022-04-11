<script setup lang="ts">
  import { ThemeName } from '@/vars/ThemeAttr'

  withDefaults(
    defineProps<{
      theme?: ThemeName
    }>(),
    {
      theme: ThemeName.DEFAULT,
    }
  )
</script>

<template>
  <div class="theme" :class="`theme--${theme}`">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  body,
  .theme {
    // background colors
    --theme-background-color: white;

    // text colors
    --theme-text-color: #213547;

    // themed colors
    --theme-primary-color: #42b883;
    --theme-primary-text-color: white;

    &--dark {
      // background colors
      --theme-background-color: #213547;

      // text colors
      --theme-text-color: white;
    }
  }
</style>
