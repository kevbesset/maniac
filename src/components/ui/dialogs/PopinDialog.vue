<script setup lang="ts">
  import { ButtonTheme } from '@/vars/ButtonAttr'
  import { computed, nextTick, onBeforeUnmount, onMounted, useSlots } from 'vue'
  import BaseButton from '../basics/BaseButton.vue'
  import BemTransition from '../transitions/BemTransition.vue'

  const props =
    defineProps<{
      modelValue?: boolean
    }>()
  const slots = useSlots()
  const emit =
    defineEmits<{
      (e: 'update:modelValue', value: boolean): void
    }>()

  const BLOCK_CLASS = 'modal'

  const open = computed({
    get() {
      return !!props.modelValue
    },
    set(value: boolean) {
      emit('update:modelValue', value)
    },
  })

  const afterEnterTransition = () => {
    document.body.style.overflow = 'hidden'
  }

  const afterLeaveTransition = () => {
    nextTick(() => {
      const hasOtherModal = document.querySelector(
        `.${BLOCK_CLASS} .${BLOCK_CLASS}__body[role=dialog]`
      )
      if (!hasOtherModal) {
        document.body.style.overflow = ''
      }
    })
  }
  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open.value) {
      open.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
  })
</script>

<template>
  <Teleport to="body">
    <BemTransition
      name="modal"
      @after-enter="afterEnterTransition"
      @after-leave="afterLeaveTransition"
    >
      <div v-if="open" :class="BLOCK_CLASS" @click="open = false">
        <div :class="`${BLOCK_CLASS}__inner`" role="dialog" @click.stop>
          <div :class="`${BLOCK_CLASS}__close`">
            <BaseButton
              :theme="ButtonTheme.SECONDARY"
              icon
              rounded
              @click="open = false"
            >
              ✕
            </BaseButton>
          </div>
          <header v-if="slots.header" :class="`${BLOCK_CLASS}__header`">
            <slot name="header"></slot>
          </header>
          <div v-if="slots.default" :class="`${BLOCK_CLASS}__body`">
            <slot name="default"></slot>
          </div>
          <footer v-if="slots.footer" :class="`${BLOCK_CLASS}__footer`">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    </BemTransition>
  </Teleport>
</template>

<style scoped lang="scss">
  .modal {
    $block-selector: &;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--theme-text-color);
      opacity: 0.3;
    }

    &--enter-active,
    &--leave-active {
      transition: opacity var(--theme-transition-duration);
    }

    &--enter-from,
    &--leave-to {
      opacity: 0;
    }

    &__close {
      position: absolute;
      z-index: 2;
      top: 1em;
      right: 1.25em;
    }

    &__inner {
      position: relative;
      background-color: var(--theme-background-color);
      color: var(--theme-text-color);
      border-radius: var(--theme-border-radius);
      margin: auto;
      width: 100%;
      max-width: calc(100% - 2.5em);
      max-height: calc(100% - 2.5em);
      display: flex;
      flex-direction: column;
      overflow: hidden;

      @media screen and (min-width: 35em) {
        min-width: 32.5em;
        width: auto;
      }

      #{$block-selector}--enter-active &,
      #{$block-selector}--leave-active & {
        transition: transform var(--theme-transition-duration);
      }

      #{$block-selector}--enter-from &,
      #{$block-selector}--leave-to & {
        transform: scale(1.3);
        transform-origin: center;
      }
    }

    &__header {
      padding: 1.25em;
      border-bottom: 1px solid var(--theme-secondary-color);
    }

    &__body {
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 2em 1.25em;
      flex: 1;
    }

    &__footer {
      padding: 1.25em;
      background-color: var(--theme-secondary-color);
    }
  }
</style>
