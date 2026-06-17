<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/useHead'
import { useReveal } from '@/composables/useReveal'
import SectionWrapper from '@/components/SectionWrapper.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)

usePageMeta({
  title: 'Work — Fandi Bayu | UI/UX Designer & Web Designer Jakarta',
  description:
    'Case studies and selected projects: dashboards, web apps, and websites. UI/UX Designer and Web Designer in Jakarta, Indonesia.',
})

useReveal(sectionRef)
</script>

<template>
  <div ref="sectionRef">
    <SectionWrapper class="pt-12">
      <h1 class="reveal text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
        {{ t('work.title') }}
      </h1>
      <p class="reveal mt-4 max-w-2xl text-lg text-ink-muted">
        {{ t('work.meta') }}
      </p>
      <div class="mt-12 space-y-6">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </SectionWrapper>
  </div>
</template>
