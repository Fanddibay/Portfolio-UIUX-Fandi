<script setup lang="ts">
import type { Project } from '@/data/projects'

const props = withDefaults(
  defineProps<{
    project: Project
    useReveal?: boolean
  }>(),
  { useReveal: true }
)
</script>

<template>
  <article
    class="group flex flex-col gap-4 rounded-3xl border border-slate-500 bg-slate-100 p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:scale-[1.01] sm:flex-row sm:items-center sm:gap-6"
    :class="{ reveal: props.useReveal }"
  >
    <div class="flex-1">
      <div class="mb-2 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        <span>{{ project.year }}</span>
        <span class="text-border-strong">·</span>
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-ink"
        >
          {{ tag }}
        </span>
        <span
          class="rounded-full px-2.5 py-0.5 text-xs font-medium"
          :class="{
            'bg-green-100 text-green-800': project.status === 'Live',
            'bg-amber-100 text-amber-800': project.status === 'NDA',
            'bg-slate-100 text-slate-600': project.status === 'Coming soon',
          }"
        >
          {{ project.status }}
        </span>
      </div>
      <h3 class="text-xl font-semibold text-ink">
        {{ project.title }}
      </h3>
      <p class="mt-1 text-ink-muted">
        {{ project.subtitle }}
      </p>
      <p class="mt-2 text-sm text-ink-muted">
        {{ project.role }}
      </p>
      <RouterLink
        :to="`/work/${project.slug}`"
        class="focus-ring mt-3 inline-flex items-center gap-2 text-accent no-underline hover:underline"
      >
        {{ $t('featured.viewCaseStudy') }}
        <FontAwesomeIcon :icon="['fas', 'external-link-alt']" class="text-xs" />
      </RouterLink>
    </div>
    <div class="h-40 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-28 sm:w-44">
      <img
        :src="project.coverImage"
        :alt="project.title"
        class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  </article>
</template>
