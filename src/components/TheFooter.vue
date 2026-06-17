<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const links = [
  { to: '/work', label: t('footer.work') },
  { to: '/about', label: t('footer.about') },
  { to: '/writing', label: t('footer.writing') },
  { to: '/resume', label: t('footer.resume') },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/in/fandibayu/', icon: ['fab', 'linkedin'] as const, label: 'LinkedIn' },
  { href: 'https://www.behance.net/fanddibayy', icon: ['fab', 'behance'] as const, label: 'Behance' },
  { href: 'https://dribbble.com/fanbayy', icon: ['fab', 'dribbble'] as const, label: 'Dribbble' },
  { href: 'https://medium.com/@fandi.bayu110', icon: ['fab', 'medium'] as const, label: 'Medium' },
  { href: 'mailto:fandi.bayu110@gmail.com', icon: ['fas', 'envelope'] as const, label: 'Email' },
]
</script>

<template>
  <footer class="border-t border-slate-500 bg-slate-100/50">
    <!-- Scroll to top button -->
    <div class="flex justify-center -mt-12">
      <button type="button"
        class="focus-ring group relative flex h-12 w-24 items-end justify-center rounded-t-full bg-slate-100 shadow-sm border-t border-slate-500 transition-all "
        :aria-label="t('footer.scrollToTop')" @click="scrollToTop">
        <FontAwesomeIcon :icon="['fas', 'chevron-up']" class="scroll-to-top-icon mb-2 text-lg text-white"
          style="filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));" />
      </button>
    </div>
    <section class="mx-auto max-w-6xl px-4 pb-6 pt-2 sm:px-6 sm:pb-8 sm:pt-0 lg:px-8">
      <p class="reveal mx-auto max-w-2xl text-center text-sm text-ink sm:text-base">
        {{ t('footer.headline') }}
      </p>
      <div class="mt-4 flex flex-wrap justify-center gap-4">
        <a v-for="s in socialLinks" :key="s.label" :href="s.href" target="_blank" rel="noopener noreferrer"
          class="focus-ring text-ink-muted transition hover:text-accent" :aria-label="s.label">
          <FontAwesomeIcon :icon="s.icon" class="text-base" />
        </a>
      </div>
      <p class="mt-2 text-center text-sm">
        <a href="mailto:fandi.bayu110@gmail.com" target="_blank" rel="noopener noreferrer" class="focus-ring text-accent no-underline hover:underline">
          {{ t('footer.email') }}
        </a>
      </p>
      <nav class="mt-4 flex flex-wrap justify-center gap-4 text-xs text-ink-muted sm:text-sm"
        aria-label="Footer navigation">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to"
          class="link-underline focus-ring no-underline hover:text-ink">
          {{ link.label }}
        </RouterLink>
      </nav>
    </section>
  </footer>
</template>
