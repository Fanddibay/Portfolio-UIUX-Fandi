<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/useHead'
import { useReveal } from '@/composables/useReveal'
import SectionWrapper from '@/components/SectionWrapper.vue'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)

const posts = computed(() => [
  {
    slug: 'design-system-basics',
    title: t('writing.posts.designSystemBasics.title'),
    date: t('writing.posts.designSystemBasics.date'),
    excerpt: t('writing.posts.designSystemBasics.excerpt'),
    source: t('writing.source'),
    link: '#',
  },
  {
    slug: 'dashboard-ux-tips',
    title: t('writing.posts.dashboardUxTips.title'),
    date: t('writing.posts.dashboardUxTips.date'),
    excerpt: t('writing.posts.dashboardUxTips.excerpt'),
    source: t('writing.source'),
    link: '#',
  },
  {
    slug: 'figma-to-code',
    title: t('writing.posts.figmaToCode.title'),
    date: t('writing.posts.figmaToCode.date'),
    excerpt: t('writing.posts.figmaToCode.excerpt'),
    source: t('writing.source'),
    link: '#',
  },
  {
    slug: 'accessibility-checklist',
    title: t('writing.posts.accessibilityChecklist.title'),
    date: t('writing.posts.accessibilityChecklist.date'),
    excerpt: t('writing.posts.accessibilityChecklist.excerpt'),
    source: t('writing.source'),
    link: '#',
  },
  {
    slug: 'jakarta-design-scene',
    title: t('writing.posts.jakartaDesignScene.title'),
    date: t('writing.posts.jakartaDesignScene.date'),
    excerpt: t('writing.posts.jakartaDesignScene.excerpt'),
    source: t('writing.source'),
    link: '#',
  },
])

usePageMeta({
  title: 'Writing — Fandi Bayu | UI/UX Designer & Web Designer',
  description: 'Articles and posts on design, dashboards, and web app UX. Source: Medium (dummy).',
})

useReveal(sectionRef)
</script>

<template>
  <div ref="sectionRef">
    <SectionWrapper class="pt-12">
      <h1 class="reveal text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
        {{ t('writing.title') }}
      </h1>
      <p class="reveal mt-4 max-w-2xl text-lg text-ink-muted">
        {{ t('writing.source') }} — {{ t('writing.dummyNote') }}
      </p>
      <ul class="mt-12 space-y-8">
        <li
          v-for="post in posts"
          :key="post.slug"
          class="reveal rounded-2xl border border-slate-500 bg-slate-100 p-6 shadow-soft transition hover:shadow-card"
        >
          <p class="text-sm text-ink-muted">
            {{ post.date }} · {{ post.source }}
          </p>
          <h2 class="mt-2 text-xl font-semibold text-ink">
            {{ post.title }}
          </h2>
          <p class="mt-2 text-ink-muted">
            {{ post.excerpt }}
          </p>
          <a
            :href="post.link || '#'"
            class="focus-ring mt-4 inline-flex items-center gap-2 text-accent no-underline hover:underline"
          >
            {{ t('writing.readMore') }}
            <FontAwesomeIcon :icon="['fas', 'external-link-alt']" class="text-xs" />
          </a>
        </li>
      </ul>
    </SectionWrapper>
  </div>
</template>
