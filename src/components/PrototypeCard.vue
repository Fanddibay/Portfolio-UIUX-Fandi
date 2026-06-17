<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Prototype } from '@/data/prototypes'

defineProps<{
  prototype: Prototype
}>()

const { t } = useI18n()
</script>

<template>
  <article
    class="reveal group overflow-hidden rounded-3xl border border-slate-500 bg-slate-100 shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover">
    <div class="aspect-video overflow-hidden bg-slate-100">
      <img :src="prototype.thumbnail" :alt="prototype.title"
        class="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
    </div>
    <div class="p-5">
      <h3 class="font-semibold text-ink">
        {{ prototype.title }}
      </h3>
      <p class="mt-1 text-sm text-ink-muted">
        {{ prototype.description }}
      </p>
      <a :href="prototype.link || '#'"
        class="focus-ring mt-4 inline-flex items-center gap-2 rounded-2xl bg-accent px-4 py-2 text-sm font-medium text-white no-underline transition hover:bg-accent-hover">
        {{ prototype.action === 'try' ? t('prototypes.try') : t('prototypes.view') }}
      </a>
    </div>
  </article>
</template>
