<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageMeta, useJsonLd } from '@/composables/useHead'
import { useReveal } from '@/composables/useReveal'
import SectionWrapper from '@/components/SectionWrapper.vue'
import FeaturedCaseStudies from '@/components/FeaturedCaseStudies.vue'
import PrototypeCard from '@/components/PrototypeCard.vue'
import SquareAccents from '@/components/SquareAccents.vue'
import { prototypes } from '@/data/prototypes'
import { testimonials } from '@/data/testimonials'
import upworkImage from '@/assets/upwork.png'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const lightboxImage = ref<string | null>(null)

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
  title: 'Fandi Bayu — UI/UX Designer & Web Designer in Jakarta',
  description:
    'A UI/UX Designer and Web Designer in Jakarta, Indonesia, specializing in dashboards and web apps. 3+ years experience. View work and get in touch.',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fandi Bayu',
  jobTitle: 'UI/UX Designer & UI/UX Engineer & Web Designer',
  url: 'https://fandibayu.com',
  sameAs: [
    'https://linkedin.com',
    'https://behance.net',
    'https://dribbble.com',
    'https://medium.com',
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Jakarta',
    addressCountry: 'ID',
  },
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fandi Bayu Portfolio',
  url: 'https://fandibayu.com',
  description: 'Portfolio of Fandi Bayu — UI/UX Designer and Web Designer in Jakarta.',
})

useReveal(sectionRef)

const heroThumbnails = [
  'https://cdn.dribbble.com/userupload/46926146/file/13a5e0a1230860d6987d79d1f99cec8c.png?resize=2048x1536&vertical=center',
  'https://cdn.dribbble.com/userupload/46887743/file/ea977440510b0ea8c481dbfe7188f24e.png?resize=2048x1536&vertical=center',
  'https://cdn.dribbble.com/userupload/40684615/file/original-43362b42ce975c9aa458bc00a6f5d395.png?resize=2048x1536&vertical=center',
  'https://cdn.dribbble.com/userupload/41293878/file/original-d3c2cd7ea2a5fed10f997439c0e09421.png?resize=2048x1536&vertical=center',
  'https://cdn.dribbble.com/userupload/41206524/file/original-7932601a9ea1662474b26994f2673457.png?resize=2048x1536&vertical=center',
  'https://cdn.dribbble.com/userupload/4833536/file/original-1343f1f87110fc2ab0338af446d30a01.png?resize=2048x1230&vertical=center',
  'https://cdn.dribbble.com/userupload/5837024/file/original-8a175a1ac06822da33d355ce252756ca.png?resize=2048x2048&vertical=center',
  'https://cdn.dribbble.com/userupload/16483814/file/original-c9a425872dee67609601db003e666836.png?resize=2048x1280&vertical=center',
]

const fallbackThumb = 'https://placehold.co/800x800/f1f5f9/1a1a1a?text=Preview'

function openLightbox(url: string) {
  lightboxImage.value = url
  document.body.style.overflow = 'hidden'
}
function closeLightbox() {
  lightboxImage.value = null
  document.body.style.overflow = ''
}
function onImageError(e: Event) {
  const target = e.target as HTMLImageElement
  if (target && target.dataset.fallback) target.src = target.dataset.fallback
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

</script>

<template>
  <div ref="sectionRef">
    <!-- A) HERO (left-aligned, copy as specified; square accents left & right) -->
    <section class="relative mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 sm:pt-16 sm:pb-28 lg:px-8 lg:pt-20 lg:pb-32">
      <SquareAccents side="left" />
      <SquareAccents side="right" />
      <div class="relative max-w-2xl">
        <h1 class="reveal text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {{ t('hero.greeting') }}
        </h1>
        <p class="reveal mt-6 text-lg text-ink-muted sm:text-xl">
          {{ t('hero.line1') }}
        </p>
        <p class="reveal mt-3 text-lg text-ink-muted sm:text-xl">
          {{ t('hero.line2') }}
        </p>
        <div class="reveal mt-8 flex flex-wrap gap-4">
          <RouterLink to="/about"
            class="focus-ring inline-flex items-center rounded-full bg-ink px-6 py-3 text-base font-medium text-white no-underline transition hover:bg-ink-soft sm:rounded-[1.25rem]">
            {{ t('hero.aboutMe') }}
          </RouterLink>
          <RouterLink to="/resume"
            class="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-ink bg-slate-100 px-6 py-3 text-base font-medium text-ink no-underline transition hover:bg-ink hover:text-white sm:rounded-[1.25rem]">
            <FontAwesomeIcon :icon="['fas', 'download']" class="text-sm" aria-hidden="true" />
            {{ t('hero.downloadResume') }}
          </RouterLink>
        </div>
        <p class="reveal mt-6 text-sm text-ink-muted sm:text-base">
          {{ t('hero.motto') }}
        </p>
      </div>
      <div class="reveal mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mt-20">
        <button v-for="(thumb, i) in heroThumbnails" :key="i" type="button"
          class="group aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 text-left transition duration-300 hover:scale-[1.02] hover:shadow-card focus-ring"
          @click="openLightbox(thumb)">
          <img :src="thumb" :alt="`${t('hero.projectPreview')} ${i + 1}`" :data-fallback="fallbackThumb"
            class="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy"
            @error="onImageError" />
        </button>
      </div>
    </section>

    <!-- Lightbox: perbesar gambar dengan animasi smooth -->
    <Teleport to="body">
      <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="lightboxImage"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm" role="dialog"
          aria-modal="true" :aria-label="t('hero.previewImage')" @click.self="closeLightbox">
          <button type="button"
            class="focus-ring absolute right-4 top-4 rounded-full bg-slate-100/90 p-2 text-ink hover:bg-slate-100"
            :aria-label="t('hero.close')" @click="closeLightbox">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <img v-if="lightboxImage" :src="lightboxImage" :alt="t('hero.previewImage')"
              class="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-card" @click.stop />
          </Transition>
        </div>
      </Transition>
    </Teleport>

    <!-- B) FEATURED CASE STUDIES -->
    <SectionWrapper id="featured" class="bg-slate-100/30">
      <FeaturedCaseStudies />
    </SectionWrapper>

    <!-- C) PROTOTYPES -->
    <SectionWrapper id="prototypes">
      <h2 class="reveal mb-10 text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
        {{ t('prototypes.title') }}
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PrototypeCard v-for="p in prototypes" :key="p.id" :prototype="p" />
      </div>
    </SectionWrapper>

    <!-- D) UPWORK / WORK TOGETHER -->
    <SectionWrapper id="work-together" class="bg-ink">
      <div class="overflow-hidden rounded-3xl border border-white/10 bg-ink-soft shadow-card">
        <div class=" gap-8 p-8 flex items-center lg:gap-12 lg:p-12">
          <div class=" lg:pr-4">
            <h2 class="text-2xl font-bold text-white sm:text-3xl">
              {{ t('upwork.title') }}
            </h2>
            <p class="mt-3 text-lg font-medium text-amber-200/90">
              {{ t('upwork.subtitle') }}
            </p>
            <ul class="mt-6 flex  gap-4 items-center text-white/90">
              <li class="flex items-center gap-3">
                <span class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  {{ t('upwork.earned') }}
                </span>
              </li>
              <li class="flex items-center gap-3">
                <span class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  {{ t('upwork.clients') }}
                </span>
              </li>
              <li class="flex items-center gap-3">
                <span class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  {{ t('upwork.hours') }}
                </span>
              </li>
            </ul>
            <p class="mt-6 text-white/80">
              I help product teams and startups with UI/UX design and front-end implementation for dashboards and web
              apps. Book a call or check my Upwork profile.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">

              <a href="https://www.upwork.com/freelancers/~015efc2530d0409842?mp_source=share" target="_blank"
                rel="noopener noreferrer"
                class="focus-ring inline-flex gap-4 items-center rounded-2xl bg-white px-6 py-3 text-base font-medium text-ink no-underline transition hover:bg-white/90">
                {{ t('upwork.secondaryCta') }}
                <FontAwesomeIcon :icon="['fas', 'external-link-alt']" class="text-sm" />
              </a>
            </div>
          </div>
          <img :src="upworkImage" :alt="t('upwork.profileImageAlt')" class="h-[200px] w-full object-contain"
            loading="lazy" />
        </div>
      </div>
    </SectionWrapper>

    <!-- E) WRITING -->
    <SectionWrapper id="writing" class="bg-slate-100/30">
      <h2 class="reveal mb-10 text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
        {{ t('writing.title') }}
      </h2>
      <ul class="space-y-6">
        <li v-for="post in posts.slice(0, 3)" :key="post.slug"
          class="reveal rounded-2xl border border-slate-500 bg-slate-100 p-6 transition shadow-soft hover:shadow-card">
          <p class="text-sm text-ink-muted">
            {{ post.date }} · {{ t('writing.source') }}
          </p>
          <h3 class="mt-2 text-xl font-semibold text-ink">
            {{ post.title }}
          </h3>
          <p class="mt-2 text-ink-muted">
            {{ post.excerpt }}
          </p>
          <a :href="post.link || '#'"
            class="focus-ring mt-3 inline-flex items-center gap-2 text-accent no-underline hover:underline">
            {{ t('writing.readMore') }}
            <FontAwesomeIcon :icon="['fas', 'external-link-alt']" class="text-xs" />
          </a>
        </li>
      </ul>
      <div class="reveal mt-8">
        <RouterLink to="/writing"
          class="focus-ring inline-flex items-center gap-2 text-accent no-underline hover:underline">
          {{ t('writing.allWriting') }}
          <FontAwesomeIcon :icon="['fas', 'external-link-alt']" class="text-xs" />
        </RouterLink>
      </div>
    </SectionWrapper>

    <!-- F) TESTIMONIALS -->
    <section id="testimonials" class="py-12 sm:py-16 md:py-20 lg:py-28">
      <div class="mx-auto w-full px-4 sm:px-6 lg:px-8" style="max-width: 100%;">
        <!-- Title with horizontal lines -->
        <div class="reveal mb-8 flex items-center justify-center gap-4 sm:mb-10 md:mb-12">
          <div class="h-px flex-1 bg-border"></div>
          <h2 class="text-2xl font-bold text-ink sm:text-3xl md:text-4xl lg:text-5xl">
            {{ t('testimonials.title') }}
          </h2>
          <div class="h-px flex-1 bg-border"></div>
        </div>

        <!-- Testimonials carousel - manual scroll only -->
        <div class="reveal">
          <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style="scroll-behavior: smooth;">
            <div v-for="testimonial in testimonials" :key="testimonial.id"
              class="flex min-w-[280px] flex-col rounded-xl border border-slate-500 bg-slate-100 p-5 shadow-soft transition-shadow hover:shadow-card sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px]">
              <div class="mb-4 flex justify-center">
                <div class="h-16 w-16 overflow-hidden rounded-full bg-slate-100">
                  <img
                    :src="testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=e0d9d0&color=1a1a1a&size=128`"
                    :alt="testimonial.author" class="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div class="mb-3 text-center">
                <cite class="text-sm font-semibold not-italic text-ink">
                  {{ testimonial.author }} @ <span class="text-accent">{{ testimonial.company }}</span>
                </cite>
                <p class="mt-1 text-xs font-bold text-ink-muted">
                  | {{ testimonial.role }}
                </p>
              </div>
              <blockquote class="flex-1 text-left text-sm leading-relaxed text-ink">
                {{ testimonial.quote }}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
