<script setup lang="ts">
defineProps<{
  reverse?: boolean
  outlined?: boolean
  tiled?: boolean
}>()
</script>

<template>
  <div
    class="badge"
    :class="{
      'badge--reverse': outlined ? !reverse : reverse,
      'badge--outlined': outlined,
      'badge--tiled': tiled
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.badge {
  display: inline-block;
  font-size: 0.75em;
  background-color: var(--colorText);
  color: var(--colorBackground);
  font-weight: 600;
  padding: 0.125rem 0.625rem;
  border-radius: 99em;

  &--reverse {
    background-color: var(--colorBackground);
    color: var(--colorText);
  }

  &--outlined {
    border: 1px solid var(--colorBorder);
  }

  &--tiled {
    border-radius: 0;
  }
}
</style>
