<script setup lang="ts">
  import { nextTick, provide, readonly, ref, watch } from 'vue'
  import { ThemeName, ThemeProvider } from '@/vars/ThemeAttr'
  import BemTransition from '@/components/ui/transitions/BemTransition.vue'

  const BLOCK_CLASS = 'theme'
  const STORAGE_KEY = 'theme'

  const getDefaultTheme = (): ThemeName => {
    let defaultTheme =
      (localStorage.getItem(STORAGE_KEY) as ThemeName) || ThemeName.DEFAULT

    if (!Object.values(ThemeName).includes(defaultTheme)) {
      defaultTheme = ThemeName.DEFAULT
    }

    localStorage.setItem(STORAGE_KEY, defaultTheme)

    return defaultTheme
  }
  const switcher = ref<HTMLElement | null>(null)
  const currentTheme = ref<ThemeName>(getDefaultTheme())
  const switching = ref(false)
  const switchTheme = ref<ThemeName>(ThemeName.DEFAULT)

  document.body.classList.add(
    BLOCK_CLASS,
    `${BLOCK_CLASS}--${currentTheme.value}`
  )

  const prepare = (nextTheme: ThemeName) => {
    if (switcher.value) {
      switcher.value.innerHTML = '' // reset switcher content
      switcher.value.innerHTML = document.body.outerHTML // get body HTML inside switcher
      switchTheme.value = nextTheme
      switching.value = true

      nextTick(() => {
        switcher.value?.scrollTo(0, window.pageYOffset) // scroll switcher to get the same scroll as the slot
      })
    }
  }

  watch(currentTheme, (newTheme, oldTheme) => {
    document.body.classList.remove(`${BLOCK_CLASS}--${oldTheme}`)
    document.body.classList.add(`${BLOCK_CLASS}--${newTheme}`)
  })

  const afterEnterTransition = () => {
    if (switcher.value) {
      currentTheme.value = switchTheme.value
      localStorage.setItem(STORAGE_KEY, currentTheme.value)
      switching.value = false
    }
  }

  const afterLeaveTransition = () => {
    if (switcher.value) {
      switcher.value.innerHTML = '' // reset switcher content
    }
  }

  provide(ThemeProvider.THEME, readonly(currentTheme))
  provide(ThemeProvider.SET_THEME, (newTheme: ThemeName) => {
    prepare(newTheme)
  })
</script>

<template>
  <slot></slot>
  <Teleport to="body">
    <BemTransition
      :name="BLOCK_CLASS"
      @after-enter="afterEnterTransition"
      @after-leave="afterLeaveTransition"
    >
      <div
        v-show="switching"
        ref="switcher"
        :class="[
          `${BLOCK_CLASS}__switcher`,
          `${BLOCK_CLASS}__switcher--${switchTheme}`,
        ]"
      ></div>
    </BemTransition>
  </Teleport>
</template>

<style lang="scss">
  .theme {
    &--enter-active {
      transition: clip-path 500ms;
    }

    &--enter-from {
      clip-path: polygon(-40% 100%, -20% 0, -20% 0, -40% 100%);
    }

    &--enter-to {
      clip-path: polygon(-40% 100%, -20% 0, 120% 0, 100% 100%);
    }

    &--leave-active {
      transition: all 150ms 150ms;
    }

    &--leave-from {
      opacity: 1;
    }

    &--leave-to {
      opacity: 0;
    }

    &,
    &__switcher {
      background-color: var(--theme-background-color);
      color: var(--theme-text-color);

      // Default theme
      // background colors
      --theme-background-color: white;

      // text colors
      --theme-text-color: #213547;

      // themed colors
      --theme-primary-color: #42b883;
      --theme-primary-text-color: white;

      &--dark {
        // background colors
        --theme-background-color: #213547;

        // text colors
        --theme-text-color: white;
      }
    }

    &__switcher {
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }
  }
</style>
