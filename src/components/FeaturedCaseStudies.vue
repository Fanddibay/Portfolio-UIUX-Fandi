<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'

const { t } = useI18n()

type FeaturedTab = 'all' | 'web-app' | 'landing-page' | 'dashboard' | 'mobile-app'
const activeTab = ref<FeaturedTab>('all')

const tabs: { value: FeaturedTab; labelKey: string }[] = [
  { value: 'all', labelKey: 'featured.tabAll' },
  { value: 'dashboard', labelKey: 'featured.tabDashboard' },
  { value: 'web-app', labelKey: 'featured.tabWebApp' },
  { value: 'landing-page', labelKey: 'featured.tabLandingPage' },
  { value: 'mobile-app', labelKey: 'featured.tabMobileApp' },
]

function normalizeTags(p: { tags?: string[] }): string[] {
  return Array.isArray(p.tags) ? p.tags.map((tag) => String(tag).toLowerCase()) : []
}

// Determine the primary category for a project (strict priority order - no mixing)
function getProjectCategory(p: { tags?: string[] }): FeaturedTab {
  const tags = normalizeTags(p)
  
  // Priority 1: Dashboard (highest priority - if has dashboard, it's dashboard)
  if (tags.some((tag) => tag.includes('dashboard'))) {
    return 'dashboard'
  }
  
  // Priority 2: Mobile App (only if has mobile/mobile-first AND no dashboard)
  if (tags.some((tag) => tag.includes('mobile') || tag.includes('mobile-first'))) {
    return 'mobile-app'
  }
  
  // Priority 3: Web App (only if has web app AND no dashboard)
  if (tags.some((tag) => tag.includes('web app'))) {
    return 'web-app'
  }
  
  // Priority 4: Landing Page (website, marketing, landing page)
  if (tags.some((tag) => ['website', 'landing page'].includes(tag) || tag.includes('landing') || tag.includes('marketing'))) {
    return 'landing-page'
  }
  
  // Default to web-app if no match
  return 'web-app'
}

const filteredProjects = computed(() => {
  const tab = activeTab.value
  
  if (tab === 'all') {
    // For "All" tab, show first 8 projects
    return projects.slice(0, 8)
  } else {
    // For specific tabs, filter by category and limit to 2
    const result = projects.filter((p) => getProjectCategory(p) === tab)
    return result.slice(0, 2)
  }
})
</script>

<template>
  <div>
    <div class="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <h2 class="text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
        {{ t('featured.title') }}
      </h2>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          type="button"
          class="focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors"
          :class="
            activeTab === tab.value
              ? 'bg-ink text-white'
              : 'bg-slate-100 text-ink-muted hover:bg-border hover:text-ink'
          "
          @click="activeTab = tab.value"
        >
          {{ t(tab.labelKey) }}
        </button>
      </div>
    </div>
    <div class="space-y-6" :key="activeTab">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.slug"
        :project="project"
        :use-reveal="false"
      />
      <p
        v-if="filteredProjects.length === 0"
        class="rounded-2xl border border-slate-500 bg-slate-100 p-8 text-center text-ink-muted"
      >
        {{ t('featured.noProjectsInCategory') }}
      </p>
    </div>
  </div>
</template>
