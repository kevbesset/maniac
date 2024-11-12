<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import Icon from '@/components/ui/Icon.vue'

const props = defineProps<{
  persistent?: boolean
}>()
const dialogOpen = defineModel<boolean>()
const dialogRef = ref<HTMLDialogElement>()

function handleDialogStateChange() {
  if (dialogOpen.value) {
    nextTick(() => {
      dialogRef.value?.showModal()
      bindEvents()
    })
  } else {
    // Triggers accessibility default behaviour from dialog (like coming back to the trigger focus)
    dialogRef.value?.close()
  }
}

function onBackdropClick(e: Event) {
  if (!props.persistent && e.target === dialogRef.value) {
    dialogOpen.value = false
  }
}

// Bind events from default dialog behaviour to Vue ref
function bindEvents() {
  dialogRef.value?.addEventListener('close', (e) => {
    e.preventDefault()
    dialogOpen.value = false
  })

  dialogRef.value?.addEventListener('cancel', (e) => {
    e.preventDefault()
    if (!props.persistent) {
      dialogOpen.value = false
    }
  })
}

watch(dialogOpen, () => {
  handleDialogStateChange()
})

onMounted(() => {
  handleDialogStateChange()
})

onUnmounted(() => {
  dialogRef.value?.removeEventListener('close', () => {
    dialogOpen.value = false
  })
  dialogRef.value?.removeEventListener('cancel', () => {
    dialogOpen.value = false
  })
})
</script>

<template>
  <Teleport to="body">
    <dialog v-if="dialogOpen" ref="dialogRef" class="dialog" @click="onBackdropClick">
      <div class="dialog__body">
        <slot></slot>
        <button v-if="!persistent" type="button" class="dialog__close" @click="dialogOpen = false">
          <Icon name="close" />
        </button>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped lang="scss">
.dialog {
  border: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  backdrop-filter: blur(0.25em);

  &::backdrop {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: color-mix(in oklch, var(--colorBackground), var(--colorText) 40%);
    opacity: 0.5;
  }

  &__body {
    position: relative;
    border: 1px solid var(--colorBorder);
    background-color: var(--colorBackground);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow);
    padding: 1.5em;
    width: 100%;
    max-width: 26.5em;
    max-height: 80dvh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
    transition-delay: 1s;
  }

  &__close {
    position: absolute;
    top: 1em;
    right: 1em;
    background: none;
    appearance: none;
    border: 0;
    border-radius: var(--borderRadius);
    box-shadow: none;
    padding: 0;
    cursor: pointer;
    transition: all var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;

    &:hover {
      transform: rotate(180deg);
    }
  }
}
</style>
