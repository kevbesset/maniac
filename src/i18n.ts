import { createI18n } from 'vue-i18n'
import { I18nLocale } from '@/vars/I18nAttr'
import PersistentStorage from '@/libs/helpers/PersistentStorage'
import { setLocale as setFormLocale } from '@vee-validate/i18n'

const LOCAL_STORAGE_KEY = 'locale'
const FALLBACK_LOCALE = I18nLocale.FR
const LOCALES: string[] = Object.values(I18nLocale)

function checkLocaleValidity(locale?: string): undefined | I18nLocale {
  return locale && LOCALES.includes(locale) ? (locale as I18nLocale) : undefined
}

function defaultLocale() {
  const persistentLocale = checkLocaleValidity(
    PersistentStorage.get(LOCAL_STORAGE_KEY)?.toLowerCase()
  )

  const browserLocale = checkLocaleValidity(
    window.navigator.language.split('-')[0].toLocaleLowerCase()
  )

  return persistentLocale || browserLocale || FALLBACK_LOCALE
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: defaultLocale(), // set locale
  fallbackLocale: FALLBACK_LOCALE, // set fallback locale
})

export function setLocale(newLocale: I18nLocale) {
  const { locale } = i18n.global
  PersistentStorage.set(LOCAL_STORAGE_KEY, newLocale)
  locale.value = newLocale
  setFormLocale(newLocale)
}

export default i18n
