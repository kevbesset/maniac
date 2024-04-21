<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { ButtonTag } from '@/libs/vars/ButtonAttr'

defineProps<{
  type?: 'submit' | 'button'
  block?: boolean
  reverse?: boolean
  rounded?: boolean
  outlined?: boolean
  tiled?: boolean
  icon?: boolean
  discrete?: boolean
}>()

const attrs = useAttrs()

const tag = computed(() => {
  return typeof attrs.disabled !== 'undefined'
    ? ButtonTag.BUTTON
    : typeof attrs.to !== 'undefined'
      ? ButtonTag.ROUTER_LINK
      : typeof attrs.href !== 'undefined'
        ? ButtonTag.LINK
        : ButtonTag.BUTTON
})
</script>

<template>
  <Component
    :is="tag"
    :role="tag !== ButtonTag.BUTTON ? 'button' : undefined"
    :type="
      type || (typeof attrs.to === 'undefined' && typeof attrs.href === 'undefined')
        ? 'button'
        : undefined
    "
    class="button"
    :class="{
      'button--disabled': typeof attrs.disabled !== 'undefined',
      'button--block': block,
      'button--reverse': outlined ? !reverse : reverse,
      'button--rounded': rounded,
      'button--outlined': outlined,
      'button--tiled': tiled,
      'button--icon': icon,
      'button--discrete': discrete
    }"
  >
    <slot></slot>
  </Component>
</template>

<style scoped lang="scss">
.button {
  --buttonColorBackground: var(--colorText);
  --buttonColorText: var(--colorBackground);
  border: none;
  border-radius: var(--borderRadius);
  box-shadow: none;
  padding: 0.5em 1em;
  cursor: pointer;
  appearance: button;
  font-weight: normal;
  background: hsl(var(--buttonColorBackground));
  color: hsl(var(--buttonColorText));
  transition: all var(--transition);

  &:hover {
    background-color: hsl(var(--buttonColorBackground) / 0.9);
  }

  &:active {
    transform: scale(0.9);
  }

  &--disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &--block {
    width: 100%;
  }

  &--reverse {
    background-color: hsl(var(--buttonColorText));
    color: hsl(var(--buttonColorBackground));

    &:hover {
      background-color: hsl(var(--buttonColorBackground) / 0.1);
    }
  }

  &--rounded {
    border-radius: 99em;
  }

  &--outlined {
    border: 1px solid hsl(var(--colorBorder));
  }

  &--tiled {
    border-radius: 0;
  }

  &--icon {
    width: 2.5em;
    height: 2.5em;
  }

  &--discrete {
    background-color: transparent;
    color: hsl(var(--colorText));

    &:hover {
      background-color: hsl(var(--buttonColorBackground) / 0.1);
    }
  }
}
</style>
