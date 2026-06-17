<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'

const { locale } = useI18n()

function switchTo(lang: 'en' | 'id') {
  setLocale(lang)
}
</script>

<template>
  <div
    class="relative inline-flex rounded-[2rem] border border-slate-500 bg-slate-100 p-1 shadow-soft"
    role="group"
    aria-label="Switch language"
  >
    <!-- Sliding oval indicator (dark) -->
    <div
      class="absolute top-1 bottom-1 rounded-full bg-ink transition-[left] duration-300 ease-out"
      :class="locale === 'id' ? 'left-[calc(50%+2px)] w-[calc(50%-6px)]' : 'left-1 w-[calc(50%-6px)]'"
      aria-hidden="true"
    />
    <!-- Labels: active = white on pill, inactive = grey on light -->
    <button
      type="button"
      class="focus-ring relative z-10 flex-1 rounded-full py-2.5 px-5 text-sm font-medium transition-colors duration-200"
      :class="locale === 'en' ? 'text-white' : 'text-ink-muted hover:text-ink'"
      @click="switchTo('en')"
    >
      EN
    </button>
    <button
      type="button"
      class="focus-ring relative z-10 flex-1 rounded-full py-2.5 px-5 text-sm font-medium transition-colors duration-200"
      :class="locale === 'id' ? 'text-white' : 'text-ink-muted hover:text-ink'"
      @click="switchTo('id')"
    >
      ID
    </button>
  </div>
</template>
