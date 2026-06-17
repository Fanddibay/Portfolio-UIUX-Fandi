<script setup lang="ts">
defineProps<{
  id?: string
  class?: string
}>()
</script>

<template>
  <section :id="id" class="py-16 sm:py-20 lg:py-24" :class="$attrs.class">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <slot />
    </div>
  </section>
</template>
