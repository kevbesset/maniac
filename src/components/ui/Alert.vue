<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'

defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="alert" role="alert">
    <div v-if="icon" class="alert__icon">
      <Icon :name="icon" />
    </div>
    <div class="alert__inner">
      <div class="alert__title">
        <slot name="title"></slot>
      </div>
      <div class="alert__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.alert {
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  width: 100%;
  border: 1px solid hsl(var(--colorBorder));
  border-radius: var(--borderRadius);
  padding: 1em;

  &__icon {
    flex-shrink: 0;
  }

  &__title {
    font-weight: 500;
  }

  &__body {
    font-size: 0.875em;
  }
}
</style>
