<script setup lang="ts">
  import BaseButton from '@/components/ui/basics/BaseButton.vue'
  import PopinDialog from '@/components/ui/dialogs/PopinDialog.vue'
  import GutterGroup from '@/components/ui/groups/GutterGroup.vue'
  import { ButtonTheme } from '@/vars/ButtonAttr'
  import { ThemeName, ThemeProvider } from '@/vars/ThemeAttr'
  import { inject, Ref, ref } from 'vue'

  const pending = ref(true)
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
</script>

<template>
  <div class="home">
    <h1>Welcome, maniac</h1>
    <BaseButton @click="toggleTheme" icon rounded class="toggler">
      🌙
    </BaseButton>
    <BaseButton :theme="ButtonTheme.SECONDARY" @click="modal = true">
      Click to open
    </BaseButton>
    <PopinDialog v-model="modal">
      <template #header>
        <strong>Buttons</strong>
      </template>
      <template #default>
        <GutterGroup>
          <BaseButton
            v-for="theme in Object.values(ButtonTheme)"
            :key="theme"
            :theme="theme"
          >
            {{ theme }}
          </BaseButton>
        </GutterGroup>
      </template>
    </PopinDialog>
  </div>
</template>

<style scoped lang="scss">
  .home {
    text-align: center;
    margin-top: 60px;
  }

  .toggler {
    position: fixed;
    bottom: 1.25em;
    right: 1.25em;
  }
</style>
