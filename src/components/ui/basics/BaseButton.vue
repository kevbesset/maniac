<script setup lang="ts">
  import ProgressCircular from '@/components/ui/progresses/ProgressCircular.vue'
  import BemTransition from '@/components/ui/transitions/BemTransition.vue'
  import { ButtonSize, ButtonTheme, ButtonType } from '@/vars/ButtonAttr'
  import { computed, useAttrs } from 'vue'
  import { RouteLocationRaw, useRouter } from 'vue-router'

  const BLOCK_CLASS = 'button'

  const router = useRouter()
  const attrs = useAttrs()
  const props = defineProps<{
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
    outlined?: boolean
    tile?: boolean
    text?: boolean
    icon?: boolean
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
      [`${BLOCK_CLASS}--reverse`]: props.outlined
        ? !props.reverse
        : props.reverse,
      [`${BLOCK_CLASS}--rounded`]: props.rounded,
      [`${BLOCK_CLASS}--outlined`]: props.outlined,
      [`${BLOCK_CLASS}--text`]: props.text,
      [`${BLOCK_CLASS}--tile`]: props.tile,
      [`${BLOCK_CLASS}--icon`]: props.icon,
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
    <span :class="`${BLOCK_CLASS}__overlay`"></span>
    <span :class="`${BLOCK_CLASS}__inner`">
      <slot></slot>
    </span>
    <BemTransition :name="BLOCK_CLASS">
      <span v-if="pending" :class="`${BLOCK_CLASS}__loader`">
        <slot name="loader">
          <ProgressCircular />
        </slot>
      </span>
    </BemTransition>
  </Component>
</template>

<style scoped lang="scss">
  .button {
    $block-selector: &;

    --button-color: var(--theme-text-color);
    --button-text-color: var(--theme-background-color);

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--button-color);
    color: var(--button-text-color);
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    font-style: normal;
    font-size: 1em;
    font-weight: 500;
    vertical-align: middle;
    box-shadow: none;
    border-radius: var(--theme-border-radius);
    border: 0;
    padding: 0.6em 1.2em;
    transition: all var(--theme-transition-duration);
    cursor: pointer;

    // transition
    &--enter-active,
    &--leave-active {
      transition-property: opacity, transform;
      transition-duration: var(--theme-transition-duration);
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

    // options
    &--tile {
      border-radius: 0;
    }

    &--text {
      padding: 0;
      border-radius: inherit;
      background: inherit;
      color: inherit;

      &:not([disabled]):not(#{$block-selector}--disabled):not(
          #{$block-selector}--pending
        ):hover {
        text-decoration: underline;
      }

      &:not([disabled]):not(#{$block-selector}--disabled):not(
          #{$block-selector}--pending
        ):active {
        text-shadow: 0 0 0.0625em currentColor;
      }
    }

    &--icon {
      width: 2.5em;
      height: 2.5em;
      padding: 0;
    }

    &--outlined {
      border: 1px solid currentColor;
    }

    &--reverse {
      background-color: var(--button-text-color);
      color: var(--button-color);
    }

    &--block {
      width: 100%;
    }

    [disabled],
    &--disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    &--rounded {
      border-radius: 99em;
    }

    // themes
    &--discret {
      color: inherit;
      background: none;
      border: inherit;
      line-height: inherit;
      font-weight: normal;
      font-size: inherit;
    }

    &--primary {
      --button-color: var(--theme-primary-color);
      --button-text-color: var(--theme-primary-text-color);
    }

    &--secondary {
      --button-color: var(--theme-secondary-color);
      --button-text-color: var(--theme-secondary-text-color);
    }

    // sizes
    &--extra-small {
      font-size: 0.75em;
    }

    &--small {
      font-size: 0.875em;
    }

    &--large {
      font-size: 1.125em;
    }

    &--extra-large {
      font-size: 1.25em;
    }

    &__inner {
      position: relative;
      z-index: 1;
      transition: color var(--theme-transition-duration);
      width: 100%;

      #{$block-selector}--pending & {
        color: transparent;
      }
    }

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: var(--theme-border-radius);
      background-color: currentColor;
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--theme-transition-duration);

      #{$block-selector}:not([disabled]):not(#{$block-selector}--disabled):not(
          #{$block-selector}--pending
        ):not(#{$block-selector}--text):hover
        & {
        opacity: 0.2;
      }

      #{$block-selector}:not([disabled]):not(#{$block-selector}--disabled):not(
          #{$block-selector}--pending
        ):not(#{$block-selector}--text):active
        & {
        opacity: 0.5;
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
