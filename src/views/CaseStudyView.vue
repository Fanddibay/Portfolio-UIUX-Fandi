<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { usePageMeta, useJsonLd } from '@/composables/useHead'
import { useReveal } from '@/composables/useReveal'
import {
  getProjectBySlug,
  getNextProject,
  getPrevProject,
} from '@/data/projects'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const lightboxImage = ref<string | null>(null)

const slug = computed(() => route.params.slug as string)
const project = computed(() => getProjectBySlug(slug.value))
const nextProject = computed(() => (project.value ? getNextProject(project.value.slug) : undefined))
const prevProject = computed(() => (project.value ? getPrevProject(project.value.slug) : undefined))

const sections = [
  { id: 'overview', key: 'caseStudy.overview' },
  { id: 'problem', key: 'caseStudy.problem' },
  { id: 'constraints', key: 'caseStudy.constraints' },
  { id: 'approach', key: 'caseStudy.approach' },
  { id: 'key-screens', key: 'caseStudy.keyScreens' },
  { id: 'outcome', key: 'caseStudy.outcome' },
  { id: 'reflection', key: 'caseStudy.reflection' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551431009-a22ee28d1ac9?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
]

useReveal(sectionRef)

function openLightbox(url: string) {
  lightboxImage.value = url
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxImage.value = null
  document.body.style.overflow = ''
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

watch(
  project,
  (p) => {
    if (!p) {
      router.replace('/work')
      return
    }
    usePageMeta({
      title: `${p.title} — Fandi Bayu | UI/UX Designer & Web Designer`,
      description: p.subtitle,
      ogImage: p.coverImage.startsWith('http') ? p.coverImage : `${import.meta.env.VITE_SITE_URL || 'https://fandibayu.com'}${p.coverImage}`,
    })
    useJsonLd({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: p.title,
      description: p.subtitle,
      datePublished: p.year,
    })
  },
  { immediate: true }
)
</script>

<template>
  <div v-if="project" ref="sectionRef">
    <article class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-6xl">
        <header class="mb-12">
          <RouterLink to="/work"
            class="focus-ring mb-6 inline-flex items-center gap-2 text-ink-muted no-underline hover:text-accent">
            <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
            {{ t('caseStudy.backToWork') }}
          </RouterLink>
          <h1 class="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            {{ project.title }}
          </h1>
          <p class="mt-4 text-lg text-ink-muted">
            {{ project.subtitle }}
          </p>
          <dl class="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-muted">
            <div>
              <dt class="font-medium text-ink">{{ t('caseStudy.role') }}</dt>
              <dd>{{ project.role }}</dd>
            </div>
            <div v-if="project.tools?.length">
              <dt class="font-medium text-ink">{{ t('caseStudy.tools') }}</dt>
              <dd>{{ project.tools.join(', ') }}</dd>
            </div>
            <div v-if="project.timeline">
              <dt class="font-medium text-ink">{{ t('caseStudy.timeline') }}</dt>
              <dd>{{ project.timeline }}</dd>
            </div>
          </dl>
        </header>

        <div class="grid gap-12 lg:grid-cols-[1fr_200px]">
          <div>
            <div class="mb-10 overflow-hidden rounded-2xl bg-slate-100">
              <img :src="project.coverImage" :alt="project.title" class="w-full object-cover" loading="eager" />
            </div>

            <div v-for="sec in sections" :key="sec.id" :id="sec.id"
              class="reveal scroll-mt-24 border-b border-slate-500 py-10 first:pt-0">
              <h2 class="text-xl font-semibold text-ink">
                {{ t(sec.key) }}
              </h2>
              <p class="mt-4 text-ink-muted">
                {{ t('caseStudy.placeholderText') }}
              </p>
              <div v-if="sec.id === 'key-screens'" class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <img
                  v-for="(img, i) in galleryImages"
                  :key="i"
                  :src="img"
                  :alt="`${t('caseStudy.screen')} ${i + 1}`"
                  class="cursor-pointer rounded-xl bg-slate-100 object-cover transition-transform hover:scale-[1.02]"
                  loading="lazy"
                  @click="openLightbox(img)"
                />
              </div>
            </div>
          </div>

          <aside class="hidden lg:block">
            <nav class="sticky top-32 pl-24" aria-label="Table of contents">
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {{ t('caseStudy.onThisPage') }}
              </p>
              <ul class="mt-4 space-y-2">
                <li v-for="sec in sections" :key="sec.id">
                  <a :href="`#${sec.id}`" class="focus-ring text-sm text-ink-muted no-underline hover:text-accent">
                    {{ t(sec.key) }}
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>

        <footer class="mt-16 flex flex-wrap items-center justify-between gap-6 pt-4">
          <RouterLink v-if="prevProject" :to="`/work/${prevProject.slug}`"
            class="focus-ring inline-flex items-center gap-2 text-accent no-underline hover:underline">
            <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
            {{ prevProject.title }}
          </RouterLink>
          <span v-else />
          <RouterLink v-if="nextProject" :to="`/work/${nextProject.slug}`"
            class="focus-ring inline-flex items-center gap-2 text-accent no-underline hover:underline">
            {{ t('caseStudy.nextProject') }}: {{ nextProject.title }}
            <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
          </RouterLink>
        </footer>
      </div>
    </article>

    <!-- Lightbox: perbesar gambar dengan animasi smooth -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxImage"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          @click.self="closeLightbox"
        >
          <button
            type="button"
            class="focus-ring absolute right-4 top-4 rounded-full bg-slate-100/90 p-2 text-ink hover:bg-slate-100"
            :aria-label="t('caseStudy.close')"
            @click="closeLightbox"
          >
            <FontAwesomeIcon :icon="['fas', 'times']" class="text-xl" />
          </button>
          <div class="relative max-h-full max-w-full">
            <img
              :src="lightboxImage"
              :alt="t('caseStudy.enlargedPreview')"
              class="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
