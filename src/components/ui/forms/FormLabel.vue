<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  defineProps<{
    inputId?: string
    required?: boolean
  }>()

  const removeAsterisk = ref(false)
  const label = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (label.value && label.value.innerText.includes('*')) {
      removeAsterisk.value = true
    }
  })
</script>

<template>
  <label
    ref="label"
    :for="inputId"
    class="label"
    :class="{
      'label--required': required && !removeAsterisk,
    }"
  >
    <slot></slot>
  </label>
</template>

<style scoped lang="scss">
  .label {
    display: block;
    font-weight: 500;

    &--required {
      &::after {
        content: '*';
        display: inline-block;
        color: currentColor;
        margin-left: 0.2em;
      }
    }
  }
</style>
