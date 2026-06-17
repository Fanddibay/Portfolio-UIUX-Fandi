<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/useHead'
import { useReveal } from '@/composables/useReveal'
import SectionWrapper from '@/components/SectionWrapper.vue'
import profilePicture from '@/assets/profilePicture.png'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)

usePageMeta({
  title: 'About — Fandi Bayu | UI/UX Designer & Web Designer Jakarta',
  description:
    'Fandi Bayu is a UI/UX Designer and Web Designer based in Jakarta, Indonesia. 3+ years experience in dashboards and web apps. Get in touch.',
})

useReveal(sectionRef)

const specialties = [
  'Design system',
  'Information Architecture',
  'Reusable Components',
  'AI Assisted Design',
  'Interactive Prototyping',
  'User Research',
  'Visual Design',
  'Prompt Design',
]

const tools = [
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/000000' },
  { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor/000000' },
  { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png' },
  { name: 'Lovable', icon: 'https://cdn.freebiesupply.com/logos/large/2x/lovable-logo-png-transparent.png' },
]
</script>

<template>
  <div ref="sectionRef">
    <SectionWrapper class="pt-12">
      <!-- Hero: Photo (left) + Greeting & intro (right) — flex like reference -->
      <div class="mb-16 flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        <img :src="profilePicture" alt="Fandi Bayu" class="rounded-xl object-cover bg-cover h-[440px] w-[440px]"
          width="280" height="280" loading="eager" />
        <div class="reveal min-w-0 flex-1">
          <p class="mb-4 text-sm font-medium text-ink-muted">
            {{ t('about.iLike') }}: 🤖 🎨 🏔️ ✨
          </p>
          <h1 class="mb-6 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            {{ t('about.greeting') }}
          </h1>
          <div class="space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>{{ t('about.intro') }}</p>
            <p>{{ t('about.intro2') }}</p>

          </div>
        </div>
      </div>

      <!-- My values -->
      <div class="reveal mb-20">
        <h2 class="mb-8 text-2xl font-semibold text-ink sm:text-3xl">
          {{ t('about.myValues') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-500 bg-slate-100/50 p-6">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-2xl font-bold text-white">
              1
            </div>
            <h3 class="mb-2 text-lg font-semibold text-ink">
              {{ t('about.value1Title') }}
            </h3>
            <p class="text-ink-muted">
              {{ t('about.value1Desc') }}
            </p>
          </div>
          <div class="rounded-2xl border border-slate-500 bg-slate-100/50 p-6">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-2xl font-bold text-white">
              2
            </div>
            <h3 class="mb-2 text-lg font-semibold text-ink">
              {{ t('about.value2Title') }}
            </h3>
            <p class="text-ink-muted">
              {{ t('about.value2Desc') }}
            </p>
          </div>
          <div class="rounded-2xl border border-slate-500 bg-slate-100/50 p-6">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-2xl font-bold text-white">
              3
            </div>
            <h3 class="mb-2 text-lg font-semibold text-ink">
              {{ t('about.value3Title') }}
            </h3>
            <p class="text-ink-muted">
              {{ t('about.value3Desc') }}
            </p>
          </div>
        </div>
      </div>

      <!-- I specialize in -->
      <div class="reveal mb-20">
        <h2 class="mb-8 text-2xl font-semibold text-ink sm:text-3xl">
          {{ t('about.iSpecializeIn') }}
        </h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div v-for="skill in specialties" :key="skill"
            class="rounded-xl border border-slate-500 bg-slate-100 p-4 text-center text-sm font-medium text-ink">
            {{ skill }}
          </div>
        </div>
      </div>

      <!-- I speak -->
      <div class="reveal mb-20">
        <h2 class="mb-8 text-2xl font-semibold text-ink sm:text-3xl">
          {{ t('about.iSpeak') }}
        </h2>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-2xl">🇮🇩</span>
            <div>
              <h3 class="font-semibold text-ink">
                {{ t('about.indonesian') }}
              </h3>
              <p class="text-sm text-ink-muted">
                {{ t('about.nativeSpeaker') }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-2xl">🇺🇸</span>
            <div>
              <h3 class="font-semibold text-ink">
                {{ t('about.english') }}
              </h3>
              <p class="text-sm text-ink-muted">
                {{ t('about.fullWorkingProficiency') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Software I love -->
      <div class="reveal mb-20">
        <h2 class="mb-4 text-2xl font-semibold text-ink sm:text-3xl">
          {{ t('about.softwareILove') }}
        </h2>
        <p class="mb-8 text-ink-muted">
          {{ t('about.softwareDesc') }}
        </p>
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div v-for="tool in tools" :key="tool.name"
            class="flex flex-col items-center gap-3 rounded-xl border border-slate-500 bg-slate-100 p-6">
            <img :src="tool.icon" :alt="tool.name" class="h-12 w-12 object-contain grayscale" loading="lazy" />
            <span class="text-sm font-medium text-ink">{{ tool.name }}</span>
          </div>
        </div>
      </div>

      <!-- My design process -->
      <div class="reveal mb-20">
        <h2 class="mb-8 text-2xl font-semibold text-ink sm:text-3xl">
          {{ t('about.myDesignProcess') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-4">
          <div class="rounded-xl border border-slate-500 bg-slate-100/50 p-6">
            <div class="mb-4 text-3xl font-bold text-accent">01</div>
            <h3 class="mb-2 font-semibold text-ink">
              {{ t('about.process1') }}
            </h3>
            <p class="whitespace-pre-line text-sm text-ink-muted">
              {{ t('about.process1Desc') }}
            </p>
          </div>
          <div class="rounded-xl border border-slate-500 bg-slate-100/50 p-6">
            <div class="mb-4 text-3xl font-bold text-accent">02</div>
            <h3 class="mb-2 font-semibold text-ink">
              {{ t('about.process2') }}
            </h3>
            <p class="whitespace-pre-line text-sm text-ink-muted">
              {{ t('about.process2Desc') }}
            </p>
          </div>
          <div class="rounded-xl border border-slate-500 bg-slate-100/50 p-6">
            <div class="mb-4 text-3xl font-bold text-accent">03</div>
            <h3 class="mb-2 font-semibold text-ink">
              {{ t('about.process3') }}
            </h3>
            <p class="whitespace-pre-line text-sm text-ink-muted">
              {{ t('about.process3Desc') }}
            </p>
          </div>
          <div class="rounded-xl border border-slate-500 bg-slate-100/50 p-6">
            <div class="mb-4 text-3xl font-bold text-accent">04</div>
            <h3 class="mb-2 font-semibold text-ink">
              {{ t('about.process4') }}
            </h3>
            <p class="whitespace-pre-line text-sm text-ink-muted">
              {{ t('about.process4Desc') }}
            </p>
          </div>
        </div>
        <p class="mt-6 text-ink-muted">
          {{ t('about.designProcessNote') }}
        </p>
      </div>

      <!-- Working experience -->
      <div class="reveal mb-20">
        <h2 class="mb-8 text-2xl font-semibold text-ink sm:text-3xl">
          {{ t('about.workingExperience') }}
        </h2>
        <div class="space-y-8">


          <!-- Solusi247 -->
          <div class="border-l-2 border-slate-500 pl-6">
            <div class="mb-2 flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-semibold text-ink">
                {{ t('about.workSolusi247.title') }}
              </h3>
              <span class="text-sm text-ink-muted">·</span>
              <span class="text-sm text-ink-muted">{{ t('about.workSolusi247.company') }}</span>
              <span class="text-sm text-ink-muted">·</span>
              <span class="text-sm text-ink-muted">{{ t('about.workSolusi247.location') }}</span>
            </div>
            <p class="mb-2 text-sm font-medium text-ink-muted">
              {{ t('about.workSolusi247.period') }}
            </p>
            <p class="text-ink-muted">
              {{ t('about.workSolusi247.description') }}
            </p>
          </div>

          <!-- Upwork -->
          <div class="border-l-2 border-slate-500 pl-6">
            <div class="mb-2 flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-semibold text-ink">
                {{ t('about.workUpwork.title') }}
              </h3>
              <span class="text-sm text-ink-muted">·</span>
              <span class="text-sm text-ink-muted">{{ t('about.workUpwork.company') }}</span>
              <span class="text-sm text-ink-muted">·</span>
              <span class="text-sm text-ink-muted">{{ t('about.workUpwork.location') }}</span>
            </div>
            <p class="mb-2 text-sm font-medium text-ink-muted">
              {{ t('about.workUpwork.period') }}
            </p>
            <p class="mb-3 text-ink-muted">
              {{ t('about.workUpwork.description') }}
            </p>
            <div class="mb-3 flex flex-wrap gap-4 text-sm text-ink-muted">
              <span><strong class="text-ink">$10K+</strong> {{ t('about.workUpwork.earned') }}</span>
              <span><strong class="text-ink">10+</strong> {{ t('about.workUpwork.clients') }}</span>
              <span><strong class="text-ink">1600+</strong> {{ t('about.workUpwork.hours') }}</span>
            </div>
            <p class="text-ink-muted">
              {{ t('about.workUpwork.specialization') }}
            </p>
          </div>

          <!-- Fiverr -->
          <div class="border-l-2 border-slate-500 pl-6">
            <div class="mb-2 flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-semibold text-ink">
                {{ t('about.workFiverr.title') }}
              </h3>
              <span class="text-sm text-ink-muted">·</span>
              <span class="text-sm text-ink-muted">{{ t('about.workFiverr.company') }}</span>
              <span class="text-sm text-ink-muted">·</span>
              <span class="text-sm text-ink-muted">{{ t('about.workFiverr.location') }}</span>
            </div>
            <p class="mb-2 text-sm font-medium text-ink-muted">
              {{ t('about.workFiverr.period') }}
            </p>
            <p class="mb-3 text-ink-muted">
              {{ t('about.workFiverr.description') }}
            </p>
            <div class="mb-3 flex flex-wrap gap-4 text-sm text-ink-muted">
              <span><strong class="text-ink">$1K+</strong> {{ t('about.workFiverr.earned') }}</span>
              <span><strong class="text-ink">15+</strong> {{ t('about.workFiverr.clientsServed') }}</span>
            </div>
            <p class="text-ink-muted">
              {{ t('about.workFiverr.focus') }}
            </p>
          </div>

          <!-- PrimeSkills -->
          <div class="border-l-2 border-slate-500 pl-6">
            <div class="mb-2 flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-semibold text-ink">
                {{ t('about.workPrimeSkills.title') }}
              </h3>
              <span class="text-sm text-ink-muted">·</span>
              <span class="text-sm text-ink-muted">{{ t('about.workPrimeSkills.company') }}</span>
              <span class="text-sm text-ink-muted">·</span>
              <span class="text-sm text-ink-muted">{{ t('about.workPrimeSkills.location') }}</span>
            </div>
            <p class="mb-2 text-sm font-medium text-ink-muted">
              {{ t('about.workPrimeSkills.period') }}
            </p>
            <p class="text-ink-muted">
              {{ t('about.workPrimeSkills.description') }}
            </p>
          </div>
        </div>
      </div>



      <!-- CTA -->
      <div class="reveal">
        <RouterLink to="/contact"
          class="focus-ring inline-flex rounded-2xl bg-accent px-6 py-3 text-base font-medium text-white no-underline transition hover:bg-accent-hover">
          {{ t('contact.title') }}
        </RouterLink>
      </div>
    </SectionWrapper>
  </div>
</template>
