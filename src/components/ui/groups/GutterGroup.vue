<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

  const BLOCK_CLASS = 'gutter'
  const group = ref<HTMLElement | null>(null)

  const props = withDefaults(
    defineProps<{
      tag?: string
      collapse?: boolean
      space?: string | number
      center?: boolean
      block?: boolean
      wrap?: boolean
      direction?: 'row' | 'column'
    }>(),
    {
      tag: 'div',
      space: '1.25',
      direction: 'row',
    }
  )

  const spaceEm = computed(() => `${props.space}em`)

  const classList = computed(() => [
    BLOCK_CLASS,
    {
      [`${BLOCK_CLASS}--collapse`]: props.collapse,
      [`${BLOCK_CLASS}--wrap`]: props.wrap,
      [`${BLOCK_CLASS}--center`]: props.center,
      [`${BLOCK_CLASS}--block`]: props.block,
      [`${BLOCK_CLASS}--column`]: props.direction === 'column',
    },
  ])

  function updateSlots() {
    if (group.value) {
      // Loop through direct children to add class
      Array.from(group.value.children).forEach((node: Element) => {
        node.setAttribute('data-item', '')
      })
    }
  }

  const observer = new MutationObserver(updateSlots)

  onMounted(() => {
    if (group.value) {
      updateSlots()
      observer.observe(group.value, {
        childList: true,
        subtree: true,
      })
    }
  })

  onBeforeUnmount(() => {
    observer.disconnect()
  })
</script>

<template>
  <Component :is="tag" ref="group" :class="classList">
    <slot></slot>
  </Component>
</template>

<style scoped lang="scss">
  .gutter {
    $block-selector: &;
    gap: v-bind('spaceEm');
    display: inline-flex;

    &--collapse {
      gap: 0;
    }

    &--wrap {
      flex-wrap: wrap;
    }

    &--center {
      align-items: center;
    }

    &--block {
      display: flex;
      width: 100%;
    }

    &--column {
      flex-direction: column;
    }

    &--collapse:deep() [data-item] {
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
</style>
