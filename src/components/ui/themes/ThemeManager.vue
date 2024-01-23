<script setup lang="ts">
  import BemTransition from '@/components/ui/transitions/BemTransition.vue'
  import PersistentStorage from '@/libs/helpers/PersistentStorage'
  import { ThemeName, ThemeProvider } from '@/vars/ThemeAttr'
  import { nextTick, onMounted, provide, readonly, ref, watch } from 'vue'

  const BLOCK_CLASS = 'theme'
  const STORAGE_KEY = 'theme'

  const props = defineProps<{
    theme?: ThemeName
  }>()

  function getDefaultTheme(): ThemeName {
    if (props.theme) return props.theme

    let defaultTheme =
      (PersistentStorage.get(STORAGE_KEY) as ThemeName) ||
      (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? ThemeName.DARK
        : ThemeName.DEFAULT

    if (!Object.values(ThemeName).includes(defaultTheme)) {
      defaultTheme = ThemeName.DEFAULT
    }

    return defaultTheme
  }

  const switcher = ref<HTMLElement | null>(null)
  const currentTheme = ref<ThemeName>(getDefaultTheme())
  const switching = ref(false)
  const switchTheme = ref<ThemeName>(ThemeName.DEFAULT)
  const nextTheme = ref<ThemeName>(currentTheme.value)

  onMounted(() => {
    // Clean body classes in case there is a theme already set
    Object.values(ThemeName).forEach((theme) =>
      document.body.classList.remove(`${BLOCK_CLASS}--${theme}`)
    )
    document.body.classList.add(
      BLOCK_CLASS,
      `${BLOCK_CLASS}--${currentTheme.value}`
    )
  })

  const prepare = (nextThemeValue: ThemeName) => {
    if (switcher.value) {
      switcher.value.innerHTML = '' // reset switcher content
      switcher.value.innerHTML = document.body.outerHTML // get body HTML inside switcher
      switchTheme.value = currentTheme.value
      nextTheme.value = nextThemeValue
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

  watch(
    () => props.theme,
    () => {
      if (props.theme) {
        prepare(props.theme)
      }
    }
  )

  function afterEnterTransition() {
    if (switcher.value) {
      currentTheme.value = nextTheme.value
      switching.value = false
    }
  }

  function afterLeaveTransition() {
    if (switcher.value) {
      switcher.value.innerHTML = '' // reset switcher content
    }
  }

  provide(ThemeProvider.THEME, readonly(currentTheme))
  provide(ThemeProvider.SET_THEME, (newTheme: ThemeName, persist = false) => {
    prepare(newTheme)
    if (persist) {
      PersistentStorage.set(STORAGE_KEY, newTheme)
    }
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
          `${BLOCK_CLASS}__switcher--${switchTheme}`
        ]"
      ></div>
    </BemTransition>
  </Teleport>
</template>

<style lang="scss">
  @import '@/assets/sass/theme';

  .theme {
    &--enter-from {
      opacity: 0;
    }

    &--enter-to {
      opacity: 1;
    }

    &--leave-active {
      transition: clip-path var(--theme-transition-duration);
    }

    &--leave-from {
      clip-path: polygon(-40% 100%, -20% 0, 120% 0, 100% 100%);
    }

    &--leave-to {
      clip-path: polygon(100% 100%, 120% 0, 120% 0, 100% 100%);
    }

    &,
    &__switcher {
      @include theme;
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
