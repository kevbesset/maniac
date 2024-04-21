<script setup lang="ts">
import { provide, readonly } from 'vue'

const activeAccordion = defineModel<string>()

function setActiveAccordionName(name?: string) {
  activeAccordion.value = name
}

provide('accordionGroup', [readonly(activeAccordion), setActiveAccordionName])
</script>

<template>
  <div class="accordion-group">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.accordion-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
