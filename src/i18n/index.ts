import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const STORAGE_KEY = 'portfolio-lang'

function getInitialLocale(): 'en' | 'id' {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY) as 'en' | 'id' | null
  if (stored === 'en' || stored === 'id') return stored
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang')
  if (lang === 'id' || lang === 'en') return lang
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: { en, id },
})

export function setLocale(locale: 'en' | 'id') {
  i18n.global.locale.value = locale
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, locale)
  }
}

export function syncLocaleFromQuery() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang')
  if (lang === 'id' || lang === 'en') setLocale(lang)
}
