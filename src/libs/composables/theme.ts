import { ref, watch } from 'vue'
import PersistentStorage from '../helpers/PersistentStorage'
import { ThemeName } from '@/vars/ThemeAttr'

const STORAGE_KEY = 'theme'

const theme = ref(getDefaultTheme())

function getDefaultTheme() {
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

export function useTheme(persist = false) {
  watch(theme, () => {
    if (persist) PersistentStorage.set(STORAGE_KEY, theme.value)
  })

  function toggle() {
    theme.value =
      theme.value === ThemeName.DEFAULT ? ThemeName.DARK : ThemeName.DEFAULT
  }

  return { theme, toggle }
}
