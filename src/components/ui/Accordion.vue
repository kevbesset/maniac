<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'
import { computed, inject, ref } from 'vue'

const props = defineProps<{
  tag?: string
  name: string
}>()

const expandedFallback = ref<string>()
const [activeAccordionName, setActiveAccordionName] = inject('accordionGroup', [
  expandedFallback,
  (name?: string) => {
    expandedFallback.value = expandedFallback.value === name ? undefined : name
  }
])

const expanded = computed(() => activeAccordionName.value === props.name)

function toggleExpansion() {
  setActiveAccordionName(expanded.value ? undefined : props.name)
}
</script>

<template>
  <Component
    :is="tag || 'div'"
    class="accordion"
    :class="{
      'accordion--expanded': expanded
    }"
  >
    <button
      :id="`accordion_trigger_${name}`"
      type="button"
      :aria-expanded="expanded ? 'true' : 'false'"
      :aria-controls="`accordion_content_${name}`"
      class="accordion__trigger"
      @click="toggleExpansion"
    >
      <slot name="trigger"></slot>
      <Icon name="expand_more" class="accordion__icon" />
    </button>
    <div
      v-show="expanded"
      :id="`accordion_content_${name}`"
      role="region"
      :aria-labelledby="`accordion_trigger_${name}`"
      class="accordion__content"
      :hidden="!expanded"
    >
      <slot name="default"></slot>
    </div>
  </Component>
</template>

<style scoped lang="scss">
.accordion {
  $blockSelector: &;
  width: 100%;
  border-bottom: 1px solid hsl(var(--colorBorder));

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: initial;
    padding: 1rem 0;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    cursor: pointer;
    font-weight: 500;
    border-radius: var(--borderRadius);
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  &__icon {
    flex-shrink: 0;
    transition: transform var(--transition);
    text-decoration: none;

    #{$blockSelector}--expanded & {
      transform: rotate(180deg);
    }
  }

  &__content {
    font-size: 0.875em;
    padding-bottom: 1rem;
  }
}
</style>
