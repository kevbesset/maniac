<script setup lang="ts">
  import { computed, ref } from 'vue'

  const props =
    defineProps<{
      color: string
      description?: string
    }>()

  const colorVar = computed(() => `--theme-${props.color}`)
  const colorRef = ref<HTMLElement | null>(null)
  const colorHex = computed(
    () =>
      colorRef.value &&
      getComputedStyle(colorRef.value).getPropertyValue(colorVar.value)
  )
</script>

<template>
  <div ref="colorRef" class="color">
    <div
      class="color__box"
      :style="{ backgroundColor: `var(${colorVar})` }"
    ></div>
    <div class="color__details">
      <div class="color__name">{{ colorVar }}</div>
      <div v-if="description" class="color__description">{{ description }}</div>
      <div class="color__value">
        {{ colorHex }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .color {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;

    &__box {
      width: 2.5em;
      height: 2.5em;
      border: 1px solid var(--theme-text-color);
      margin-right: 2em;
      border-radius: 0.2em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color var(--theme-transition-duration);
    }

    &__details {
      font-size: 0.75em;
      line-height: 1.2;
    }

    &__name {
      font-weight: bold;
    }

    &__description {
      opacity: 0.75;
    }
  }
</style>
