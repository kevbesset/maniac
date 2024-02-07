<script setup lang="ts">
  import { ref, watch, onMounted, onUnmounted, useSlots, nextTick } from 'vue'
  import BaseIcon from '@/components/ui/basics/BaseIcon.vue'
  import BaseButton from '@/components/ui/basics/BaseButton.vue'
  import BemTransition from '../transitions/BemTransition.vue'

  const props = defineProps<{
    hideClose?: boolean
    persistent?: boolean
  }>()

  const emit = defineEmits<{
    (event: 'before-open'): void
    (event: 'before-close'): void
  }>()
  const slots = useSlots()

  const modal = ref<HTMLDialogElement>()

  const modalOpen = defineModel<boolean>()

  watch(modalOpen, () => {
    checkModalState()
  })

  onMounted(() => {
    checkModalState()
    bindEvents()
  })

  onUnmounted(() => {
    if (modal.value) {
      modal.value.removeEventListener('close', () => {
        modalOpen.value = false
      })
      modal.value.removeEventListener('cancel', () => {
        //
      })
    }
  })

  function checkModalState() {
    if (modalOpen.value) {
      nextTick(() => {
        modal.value?.showModal()
        bindEvents()
      })
    } else {
      modal.value?.close()
    }
  }

  function bindEvents() {
    if (modal.value) {
      modal.value.addEventListener('close', () => {
        modalOpen.value = false
      })

      if (props.persistent) {
        modal.value.addEventListener('cancel', (event) => {
          event.preventDefault()
        })
      }
    }
  }

  function onBackdropClick() {
    if (!props.persistent) {
      modalOpen.value = false
    }
  }

  watch(modalOpen, () => {
    if (modalOpen.value) emit('before-open')
    else emit('before-close')
  })
</script>

<template>
  <Teleport to="body">
    <BemTransition name="modal">
      <dialog
        v-if="modalOpen"
        ref="modal"
        class="modal"
        @click="onBackdropClick"
      >
        <div class="modal__inner" @click.stop>
          <div class="modal__close">
            <BaseButton v-if="!hideClose" text @click="modalOpen = false">
              <BaseIcon name="close" />
            </BaseButton>
          </div>
          <header v-if="slots.header" class="modal__header">
            <slot name="header"></slot>
          </header>
          <article v-if="slots.default" class="modal__body">
            <slot></slot>
          </article>

          <footer v-if="slots.footer" class="modal__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </dialog>
    </BemTransition>
  </Teleport>
</template>

<style scoped lang="scss">
  .modal {
    display: block;
    inset: 0;
    background-color: var(--theme-background-color);
    color: var(--theme-text-color);
    border-radius: var(--theme-border-radius);
    box-shadow: 0.25em 0.25em 0.625em 0 var(--theme-shadow-color);
    border: none;
    width: calc(100% - 3em);
    padding: 0;
    max-width: 29.25em;
    text-align: center;
    box-shadow: 0.25em 0.25em 0.625em 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: auto;

    &:not([open]) {
      pointer-events: none;
    }

    &::backdrop {
      background-color: rgba(12, 12, 12, 0.5);
      backdrop-filter: blur(0.25em);
    }

    &--enter-active,
    &--leave-active {
      transition-property: transform, opacity;
      transition-duration: var(--theme-transition-duration);

      &::backdrop {
        transition: background-color var(--theme-transition-duration);
      }
    }

    &--enter-from,
    &--leave-to {
      transform: translate3d(0, 50%, 0);
      opacity: 0;

      &::backdrop {
        background-color: transparent;
      }
    }

    &--leave-to {
      transform: translate3d(0, -50%, 0);
    }

    &__inner {
      padding: 2em;
      display: flex;
      flex-direction: column;
      gap: 2em;
    }

    &__close {
      display: flex;
      justify-content: flex-end;
      font-size: 1.5em;
    }

    &__header {
      font-size: 1.5em;
      font-weight: bold;
    }

    &__footer {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
  }
</style>
