<script setup lang="ts">
  import BaseButton from '@/components/ui/basics/BaseButton.vue'
  import GutterGroup from '@/components/ui/groups/GutterGroup.vue'
  import { ButtonSize, ButtonTheme } from '@/vars/ButtonAttr'
  import { ThemeName, ThemeProvider } from '@/vars/ThemeAttr'
  import { inject, Ref, ref } from 'vue'

  const pending = ref(true)
  const theme = inject<Readonly<Ref<ThemeName>>>(ThemeProvider.THEME)
  const setTheme = inject<(theme: ThemeName) => void>(ThemeProvider.SET_THEME)

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
    <BaseButton @click="toggleTheme" rounded tile class="toggler">
      🌙
    </BaseButton>
    <div v-for="theme in Object.values(ButtonTheme)" :key="theme">
      <h2>{{ theme || 'default theme' }}</h2>
      <div :style="{ maxWidth: '1024px', margin: '0 auto' }">
        <GutterGroup center>
          <BaseButton :theme="theme">button</BaseButton>
          <BaseButton :theme="theme" reverse>reverse</BaseButton>
          <BaseButton :theme="theme" disabled>disabled</BaseButton>
          <BaseButton :theme="theme" outlined>outlined</BaseButton>
          <BaseButton :theme="theme" icon>
            i
            <template #visuallyhidden>Informations</template>
          </BaseButton>
          <BaseButton :theme="theme" tile>tile</BaseButton>
          <BaseButton :theme="theme" rounded>rounded</BaseButton>
          <BaseButton
            :theme="theme"
            :pending="pending"
            @click="pending = !pending"
            >pending</BaseButton
          >
          <BaseButton :theme="theme" text>text</BaseButton>
        </GutterGroup>
        <br />
        <br />
        <BaseButton :theme="theme" block>block</BaseButton>
        <br />
        <br />
        <GutterGroup center>
          <BaseButton
            v-for="size in [...Object.values(ButtonSize)]"
            :theme="theme"
            :size="size"
          >
            {{ size || 'default size' }}
          </BaseButton>
        </GutterGroup>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    text-align: center;
    margin-top: 60px;
  }

  .toggler {
    position: fixed;
    top: 0;
    right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
</style>
