<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/useHead'
import { useReveal } from '@/composables/useReveal'
import SectionWrapper from '@/components/SectionWrapper.vue'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)

usePageMeta({
  title: 'Contact — Fandi Bayu | UI/UX Designer & Web Designer Jakarta',
  description: 'Get in touch with Fandi Bayu for UI/UX design and web design projects in Jakarta, Indonesia.',
})

useReveal(sectionRef)

const socialLinks = [
  { href: 'https://www.linkedin.com/in/fandibayu/', icon: ['fab', 'linkedin'] as const, label: 'LinkedIn' },
  { href: 'https://www.behance.net/fanddibayy', icon: ['fab', 'behance'] as const, label: 'Behance' },
  { href: 'https://dribbble.com/fanbayy', icon: ['fab', 'dribbble'] as const, label: 'Dribbble' },
  { href: 'https://medium.com/@fandi.bayu110', icon: ['fab', 'medium'] as const, label: 'Medium' },
  { href: 'mailto:fandi.bayu110@gmail.com', icon: ['fas', 'envelope'] as const, label: 'Email' },
]
</script>

<template>
  <div ref="sectionRef" id="contact">
    <SectionWrapper class="pt-12">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="reveal text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
          {{ t('contact.title') }}
        </h1>
        <p class="reveal mt-6 text-lg text-ink-muted">
          {{ t('footer.headline') }}
        </p>
        <a
          href="mailto:fandi.bayu110@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="reveal mt-8 inline-block text-xl font-medium text-accent no-underline hover:underline"
        >
          {{ t('footer.email') }}
        </a>
        <div class="reveal mt-10 flex flex-wrap justify-center gap-6">
          <a
            v-for="s in socialLinks"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            class="focus-ring rounded-full border border-slate-500 bg-slate-100 p-4 text-ink-muted transition hover:border-accent hover:text-accent"
            :aria-label="s.label"
          >
            <FontAwesomeIcon :icon="s.icon" class="text-xl" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>
