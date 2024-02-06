<script setup lang="ts">
  import BaseButton from '@/components/ui/basics/BaseButton.vue'
  import { useI18n } from 'vue-i18n'
  import { setLocale } from '@/i18n'
  import { I18nLocale } from '@/vars/I18nAttr'
  import BemTransition from '../ui/transitions/BemTransition.vue'
  import { useTheme } from '@/libs/composables/theme'

  const { t, locale } = useI18n()

  const { toggle: toggleTheme } = useTheme()

  function toggleLocale() {
    setLocale(locale.value === I18nLocale.FR ? I18nLocale.EN : I18nLocale.FR)
  }
</script>

<template>
  <main class="layout__main">
    <RouterView v-slot="{ Component }">
      <BemTransition name="page">
        <Component :is="Component" />
      </BemTransition>
    </RouterView>
  </main>
  <div class="layout__toolbox">
    <BaseButton v-bouncy icon rounded class="toggler" @click="toggleLocale">
      {{ t('locale') }}
    </BaseButton>
    <BaseButton v-bouncy icon rounded class="toggler" @click="toggleTheme">
      {{ t('theme') }}
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
  .layout {
    &__main {
      position: relative;
      z-index: 0;
    }

    &__toolbox {
      position: fixed;
      display: flex;
      gap: 0.5em;
      bottom: 1.25em;
      right: 1.25em;
    }
  }
</style>

<i18n lang="json">
{
  "fr": {
    "theme": "🌙",
    "locale": "🇫🇷"
  },
  "en": {
    "theme": "🌙",
    "locale": "🇬🇧"
  }
}
</i18n>
