<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/useHead'
import SectionWrapper from '@/components/SectionWrapper.vue'

const { t } = useI18n()

usePageMeta({
  title: 'Resume — Fandi Bayu | UI/UX Designer & Web Designer',
  description: 'Download Fandi Bayu resume. UI/UX Designer and Web Designer in Jakarta, Indonesia.',
})

const resumeUrl = '/CV Fandi Bayu Anggoro Sakt.pdf'
</script>

<template>
  <SectionWrapper class="pt-12">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
        {{ t('resume.title') }}
      </h1>
      <p class="mt-4 text-lg text-ink-muted">
        {{ t('resume.meta') }}
      </p>
      <a
        :href="resumeUrl"
        download
        class="focus-ring mt-10 inline-flex items-center gap-2 rounded-2xl bg-accent px-8 py-4 text-lg font-medium text-white no-underline transition hover:bg-accent-hover"
      >
        <FontAwesomeIcon :icon="['fas', 'download']" />
        {{ t('resume.download') }}
      </a>
    </div>
  </SectionWrapper>
</template>
