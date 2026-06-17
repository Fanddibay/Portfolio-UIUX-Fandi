<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import LanguageToggle from '@/components/LanguageToggle.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
    <!-- Language pill: fixed bottom-right (like Simon Lin) -->
    <div class="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      <LanguageToggle />
    </div>
  </div>
</template>
