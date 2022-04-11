<script setup lang="ts">
  import InfiniteLoader from '@/components/ui/loaders/InfiniteLoader.vue'
  import BemTransition from '@/components/ui/transitions/BemTransition.vue'
  import { ButtonSize, ButtonTheme, ButtonType } from '@/vars/ButtonAttr'
  import { computed, useAttrs } from 'vue'
  import { RouteLocationRaw, useRouter } from 'vue-router'

  const BLOCK_CLASS = 'button'

  const router = useRouter()
  const attrs = useAttrs()
  const props =
    defineProps<{
      type?: ButtonType.BUTTON | ButtonType.SUBMIT
      theme?: ButtonTheme
      size?: ButtonSize
      to?: RouteLocationRaw
      href?: string
      disabled?: boolean
      pending?: boolean
      block?: boolean
      reverse?: boolean
      rounded?: boolean
    }>()

  const tag = computed(() =>
    props.disabled
      ? ButtonType.BUTTON
      : props.to
      ? ButtonType.ROUTER_LINK
      : typeof props.href !== 'undefined'
      ? ButtonType.LINK
      : ButtonType.BUTTON
  )

  const typeAttr = computed(() => {
    if (
      props.type &&
      [ButtonType.BUTTON, ButtonType.SUBMIT].includes(props.type)
    ) {
      return props.type
    }

    if (typeof props.href === 'undefined' && !props.to) {
      return ButtonType.BUTTON
    }

    return undefined
  })

  const classList = computed(() => [
    BLOCK_CLASS,
    props.theme && `${BLOCK_CLASS}--${props.theme}`,
    props.size && `${BLOCK_CLASS}--${props.size}`,
    {
      [`${BLOCK_CLASS}--disabled`]: props.disabled,
      [`${BLOCK_CLASS}--pending`]: props.pending,
      [`${BLOCK_CLASS}--block`]: props.block,
      [`${BLOCK_CLASS}--reverse`]: props.reverse,
      [`${BLOCK_CLASS}--rounded`]: props.rounded,
    },
  ])

  const boundings = computed(() => {
    const href =
      typeof props.href !== 'undefined'
        ? props.href
        : props.to
        ? router.resolve(props.to).href
        : undefined
    return {
      ...attrs,
      role: tag.value !== ButtonType.BUTTON ? 'button' : undefined,
      disabled: props.disabled || undefined,
      to: props.to,
      href,
      type: typeAttr.value,
      class: [attrs.class, ...classList.value],
    }
  })
</script>

<template>
  <Component :is="tag" v-bind="boundings">
    <span :class="`${BLOCK_CLASS}__hover`"></span>
    <span :class="`${BLOCK_CLASS}__inner`">
      <slot></slot>
    </span>
    <BemTransition :name="BLOCK_CLASS">
      <span v-if="pending" :class="`${BLOCK_CLASS}__loader`">
        <slot name="loader">
          <InfiniteLoader />
        </slot>
      </span>
    </BemTransition>
  </Component>
</template>

<style scoped lang="scss">
  .button {
    $block-selector: &;
    --button-text-color: var(--theme-background-color);
    --button-background-color: var(--theme-text-color);
    --button-border-color: transparent;

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--button-background-color);
    color: var(--button-text-color);
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    font-style: normal;
    font-size: 1em;
    font-weight: 500;
    vertical-align: middle;
    box-shadow: none;
    border-radius: 0.25em;
    border: 1px solid var(--button-border-color);
    padding: 0.875em 1em;
    overflow: hidden;

    &:not([disabled]):not(#{$block-selector}--disabled) {
      cursor: pointer;
    }

    &:not([disabled]):not(#{$block-selector}--disabled):not(#{$block-selector}--discret):hover {
      color: var(--button-background-color);
    }

    &:not([disabled]):not(#{$block-selector}--disabled):not(#{$block-selector}--discret):active {
      transform: scale(0.9);
    }

    // transition
    &--enter-active,
    &--leave-active {
      transition-property: opacity, transform;
      transition-duration: 150ms;
    }

    &--enter-from,
    &--leave-to {
      opacity: 0;
      transform: translateY(100%);
    }

    &--enter-to,
    &--leave-from {
      opacity: 1;
      transform: translateY(0);
    }

    // themes
    &--discret {
      padding: 0;
      color: inherit;
      background: none;
      border-radius: 0;
      border: 0;
      line-height: 1.5;
      font-weight: normal;
      font-size: inherit;
    }

    &--primary {
      --button-text-color: var(--theme-primary-text-color);
      --button-background-color: var(--theme-primary-color);
    }

    &--reverse {
      background: var(--button-text-color);
      color: var(--button-background-color);
      border-color: var(--button-background-color);

      &:not([disabled]):not(#{$block-selector}--disabled):not(#{$block-selector}--discret):hover {
        color: var(--button-text-color);
      }
    }

    // sizes
    &--small {
      padding: 0.75em 1.25em;
      font-size: 0.875em;
    }

    &--large {
      font-size: 2em;
    }

    // other styles
    &--block {
      width: 100%;
    }

    &--disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    &--rounded {
      border-radius: 99em;
    }

    &__inner {
      position: relative;
      z-index: 1;
      transition: all 150ms;
      width: 100%;

      #{$block-selector}--pending & {
        color: transparent;
        fill: transparent;
      }
    }

    &__hover {
      position: absolute;
      background-color: var(--button-text-color);
      height: 100%;
      top: 0;
      left: -100%;
      transform: skew(50deg);
      transition: width 350ms;
      transform-origin: top left;
      width: 0;

      #{$block-selector}--reverse & {
        background-color: var(--button-background-color);
      }

      #{$block-selector}:not([disabled]):not(#{$block-selector}--disabled):not(#{$block-selector}--discret):hover
        & {
        width: 200%;
      }
    }

    &__loader {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: wait;
    }
  }
</style>
