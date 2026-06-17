<script setup lang="ts">
import { useHead } from '@vueuse/head'
import LayoutView from '@/views/LayoutView.vue'

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap',
    },
  ],
})
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <LayoutView>
      <RouterView />
    </LayoutView>
  </div>
</template>
