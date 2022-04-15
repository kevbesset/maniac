<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

  const BLOCK_CLASS = 'gutter'
  const group = ref<HTMLElement | null>(null)

  const props = withDefaults(
    defineProps<{
      tag?: string
      collapse?: boolean
      space?: string
      center?: boolean
      block?: boolean
    }>(),
    {
      tag: 'div',
      space: '1.25',
    }
  )

  const spaceEm = computed(() => `${props.space}em`)

  const classList = computed(() => [
    BLOCK_CLASS,
    {
      [`${BLOCK_CLASS}--collapse`]: props.collapse,
      [`${BLOCK_CLASS}--center`]: props.center,
      [`${BLOCK_CLASS}--block`]: props.block,
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

    margin-top: calc(v-bind('spaceEm') * -1);
    margin-left: calc(v-bind('spaceEm') * -1);
    display: inline-flex;
    flex-wrap: wrap;

    &--collapse {
      margin: 0;
    }

    &--center {
      align-items: center;
    }

    &--block {
      display: flex;
      width: 100%;
    }

    ::v-deep([data-item]) {
      margin-top: v-bind('spaceEm');
      margin-left: v-bind('spaceEm');
    }

    &--collapse::v-deep() [data-item] {
      margin-left: 0;
      margin-bottom: 0;

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
