<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const route = useRoute()
const { t } = useI18n()
const mobileOpen = ref(false)
const showName = ref(false)

const navLinks = computed(() => [
  { to: '/work', label: t('nav.work') },
  { to: '/about', label: t('nav.about') },
  { to: '/writing', label: t('nav.writing') },
])

const socialLinks = [
  { href: 'https://www.linkedin.com/in/fandibayu/', icon: ['fab', 'linkedin'] as const, label: 'LinkedIn' },
  { href: 'https://www.behance.net/fanddibayy', icon: ['fab', 'behance'] as const, label: 'Behance' },
  { href: 'https://dribbble.com/fanbayy', icon: ['fab', 'dribbble'] as const, label: 'Dribbble' },
  { href: 'https://medium.com/@fandi.bayu110', icon: ['fab', 'medium'] as const, label: 'Medium' },
  { href: 'mailto:fandi.bayu110@gmail.com', icon: ['fas', 'envelope'] as const, label: 'Email' },
]

const isScrolled = ref(false)
const scrollThreshold = 80

function onScroll() {
  if (typeof window === 'undefined') return
  const y = window.scrollY
  showName.value = y > scrollThreshold
  isScrolled.value = y > scrollThreshold
}

function goResume() {
  const link = document.createElement('a')
  link.href = '/CV Fandi Bayu Anggoro Sakt.pdf'
  link.download = 'CV Fandi Bayu Anggoro Sakt.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  mobileOpen.value = false
}
function closeMenu() {
  mobileOpen.value = false
}

function isActive(path: string) {
  if (path === '/work') return route.path === '/' || route.path.startsWith('/work')
  return route.path === path
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="sticky top-0 z-50 w-full transition-[padding] duration-300"
    :class="isScrolled ? 'px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6' : ''">
    <nav class="flex h-14 items-center justify-between transition-all duration-300 sm:h-16" :class="isScrolled
      ? 'mx-auto max-w-6xl rounded-[2rem] border border-slate-500 bg-white px-4 py-2.5 shadow-soft backdrop-blur-sm sm:px-5 sm:py-3'
      : 'mx-auto max-w-6xl border-b border-slate-500 bg-white px-4 sm:px-6 lg:px-8'
      " aria-label="Main navigation">
      <!-- Left: avatar only; "Fandi Bayu" appears after scroll > 1 page -->
      <RouterLink to="/" class="focus-ring flex items-center gap-3 no-underline" @click="mobileOpen = false">
        <div class="flex h-9 w-9 shrink-0 overflow-hidden rounded-full bg-ink sm:h-10 sm:w-10">
          <img src="/favicon.svg" alt="Fandi Bayu" class="h-full w-full object-cover" width="40" height="40" />
        </div>
        <div class="overflow-hidden">
          <Transition enter-active-class="transition-[opacity,transform] duration-300 ease-out"
            enter-from-class="opacity-0 -translate-x-2" enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition-[opacity,transform] duration-200 ease-in"
            leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-2">
            <span v-show="showName"
              class="inline-block whitespace-nowrap text-base font-bold tracking-tight text-ink sm:text-lg">
              Fandi Bayu
            </span>
          </Transition>
        </div>
      </RouterLink>

      <!-- Right: Work (black pill when active), About, Writing, Resume (white pill + border + icon) -->
      <div class="hidden items-center gap-2 md:flex md:gap-3">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
          class="focus-ring min-w-[4rem] rounded-full px-4 py-2.5 text-center text-sm font-medium no-underline transition sm:rounded-[1.25rem] sm:px-5"
          :class="isActive(link.to)
            ? 'bg-ink text-white'
            : 'text-ink-muted hover:text-ink'
            " @click="closeMenu">
          {{ link.label }}
        </RouterLink>
        <a href="/CV Fandi Bayu Anggoro Sakt.pdf" download="CV Fandi Bayu Anggoro Sakt.pdf"
          class="focus-ring flex items-center gap-2 rounded-full  bg-slate-100 px-4 py-2.5 text-sm font-medium text-ink no-underline transition hover:bg-ink hover:text-white sm:rounded-[1.25rem] sm:px-5">
          {{ t('nav.downloadResume') }}
          <FontAwesomeIcon :icon="['fas', 'download']" class="text-xs" aria-hidden="true" />
        </a>
      </div>

      <!-- Mobile: menu button -->
      <div class="flex items-center gap-2 md:hidden">
        <button type="button" class="focus-ring -mr-1 rounded-2xl p-2.5 text-ink" aria-label="Toggle menu"
          :aria-expanded="mobileOpen" @click="mobileOpen = !mobileOpen">
          <svg v-if="!mobileOpen" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-show="mobileOpen" class="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm md:hidden" aria-hidden="true"
        @click="mobileOpen = false" />
    </Transition>
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-x-full"
      enter-to-class="translate-x-0" leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0" leave-to-class="translate-x-full">
      <div v-show="mobileOpen"
        class="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-slate-500 bg-slate-100 shadow-card md:hidden"
        role="dialog" aria-modal="true" aria-label="Menu">
        <div class="flex flex-1 flex-col overflow-y-auto p-6 pt-8">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
            class="py-3 text-base font-medium text-ink no-underline"
            :class="isActive(link.to) ? 'font-semibold' : 'text-ink-muted'" @click="closeMenu">
            {{ link.label }}
          </RouterLink>
          <button type="button" class="mt-2 flex items-center gap-2 py-3 text-left text-base font-medium text-ink"
            @click="goResume">
            {{ t('nav.downloadResume') }}
            <FontAwesomeIcon :icon="['fas', 'download']" class="text-sm" />
          </button>
          <div class="mt-8 border-t border-slate-500 pt-6">
            <p class="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Find me here
            </p>
            <div class="mt-4 flex flex-wrap gap-4">
              <a v-for="s in socialLinks" :key="s.label" :href="s.href" target="_blank" rel="noopener noreferrer"
                class="focus-ring text-ink-muted transition hover:text-accent" :aria-label="s.label"
                @click="mobileOpen = false">
                <FontAwesomeIcon :icon="s.icon" class="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
