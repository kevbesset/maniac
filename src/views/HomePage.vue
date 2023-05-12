<script setup lang="ts">
  import BaseButton from '@/components/ui/basics/BaseButton.vue'
  import ModalOverlay from '@/components/ui/overlays/ModalOverlay.vue'
  import GutterGroup from '@/components/ui/groups/GutterGroup.vue'
  import { ButtonTheme } from '@/vars/ButtonAttr'
  import { ThemeName, ThemeProvider } from '@/vars/ThemeAttr'
  import { inject, Ref, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { setLocale } from '@/i18n'
  import { I18nLocale } from '@/vars/I18nAttr'

  const { t, locale } = useI18n()

  const theme = inject<Readonly<Ref<ThemeName>>>(ThemeProvider.THEME)
  const setTheme = inject<(theme: ThemeName) => void>(ThemeProvider.SET_THEME)
  const modal = ref(false)

  function toggleTheme() {
    if (typeof setTheme !== 'undefined' && typeof theme !== 'undefined') {
      setTheme(
        theme.value === ThemeName.DEFAULT ? ThemeName.DARK : ThemeName.DEFAULT
      )
    }
  }

  function toggleLocale() {
    setLocale(locale.value === I18nLocale.FR ? I18nLocale.EN : I18nLocale.FR)
  }
</script>

<template>
  <div class="home">
    <h1>{{ t('welcome') }}</h1>
    <GutterGroup class="toolbox">
      <BaseButton icon rounded class="toggler" @click="toggleLocale">
        {{ t('locale') }}
      </BaseButton>
      <BaseButton icon rounded class="toggler" @click="toggleTheme">
        {{ t('theme') }}
      </BaseButton>
    </GutterGroup>
    <BaseButton :theme="ButtonTheme.SECONDARY" @click="modal = true">
      {{ t('test') }}
    </BaseButton>
    <ModalOverlay v-model="modal">
      <template #header>
        <strong>{{ t('button') }}</strong>
      </template>
      <template #default>
        <GutterGroup wrap>
          <BaseButton
            v-for="selectedTheme in Object.values(ButtonTheme)"
            :key="selectedTheme"
            :theme="selectedTheme"
          >
            {{ selectedTheme }}
          </BaseButton>
        </GutterGroup>
      </template>
    </ModalOverlay>
  </div>
</template>

<style scoped lang="scss">
  .home {
    text-align: center;
    margin-top: 3.75em;
  }

  .toolbox {
    position: fixed;
    bottom: 1.25em;
    right: 1.25em;
  }
</style>

<i18n lang="json">
{
  "fr": {
    "welcome": "Bonjour, maniac",
    "test": "Clique pour découvrir",
    "button": "Boutons",
    "theme": "🌙",
    "locale": "🇫🇷"
  },
  "en": {
    "welcome": "Welcome, maniac",
    "test": "Click to open",
    "button": "Buttons",
    "theme": "🌙",
    "locale": "🇬🇧"
  }
}
</i18n>
