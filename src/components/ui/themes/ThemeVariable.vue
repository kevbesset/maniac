<script setup lang="ts">
  import { computed, ref } from 'vue'

  const props =
    defineProps<{
      variable: string
      description?: string
    }>()

  const variableVar = computed(() => `--theme-${props.variable}`)
  const variableRef = ref<HTMLElement | null>(null)
  const variableValue = computed(
    () =>
      variableRef.value &&
      getComputedStyle(variableRef.value).getPropertyValue(variableVar.value)
  )
</script>

<template>
  <div ref="variableRef" class="variable">
    <div class="variable__details">
      <div class="variable__name">{{ variableVar }}</div>
      <div v-if="description" class="variable__description">
        {{ description }}
      </div>
      <div class="variable__value">
        {{ variableValue }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .variable {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;

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
