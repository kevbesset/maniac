<script setup lang="ts">
import { useSlots } from 'vue'

defineProps<{
  tag?: string
}>()

const slots = useSlots()
</script>

<template>
  <Component :is="tag || 'div'" class="card">
    <div v-if="slots.title || slots.subtitle" class="card__header">
      <div v-if="slots.title" class="card__title">
        <slot name="title"></slot>
      </div>
      <div v-if="slots.subtitle" class="card__subtitle">
        <slot name="subtitle"></slot>
      </div>
    </div>
    <div v-if="slots.default" class="card__body">
      <slot></slot>
    </div>
    <div v-if="slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </div>
  </Component>
</template>

<style scoped lang="scss">
.card {
  padding: 1.5em;
  border: 1px solid hsl(var(--colorBorder));
  border-radius: var(--borderRadius);
  display: inline-flex;
  flex-direction: column;
  gap: 1.5em;
  box-shadow: var(--shadow);

  &__title {
    font-size: 1.5em;
    font-weight: 600;
  }

  &__subtitle {
    font-size: 0.875em;
    color: hsl(var(--colorText--muted));
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    gap: 1em;
  }
}
</style>
