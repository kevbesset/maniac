<script setup lang="ts">
  defineProps<{
    errors?: string[]
  }>()
</script>

<template>
  <ul class="error-list">
    <li v-for="error in errors" :key="error" class="error-list__item">
      {{ error }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .error-list {
    list-style: none;
    padding: 0;
    margin-top: 0;
    color: var(--theme-error-color);
  }
</style>
