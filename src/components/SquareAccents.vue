<script setup lang="ts">
defineProps<{
  side: 'left' | 'right'
}>()
// Irregular diagonal pattern: [row, col] positions (0-based). Grid is ~5 cols x 10 rows.
const leftPattern = [
  [0, 0], [1, 1], [2, 0], [2, 2], [3, 1], [4, 0], [4, 2], [5, 1], [5, 3], [6, 0], [6, 2], [7, 1], [8, 2], [9, 1],
]
const rightPattern = [
  [0, 2], [0, 4], [1, 1], [1, 3], [2, 0], [2, 2], [2, 4], [3, 1], [3, 3], [4, 0], [4, 2], [5, 1], [5, 3], [6, 0], [6, 2], [6, 4], [7, 1], [7, 3], [8, 2], [9, 1], [9, 3],
]
</script>

<template>
  <div
    class="pointer-events-none absolute top-0 hidden h-full w-24 sm:block md:w-28 lg:w-32"
    :class="side === 'left' ? 'left-0 origin-top-left' : 'right-0 origin-top-right'"
    aria-hidden="true"
  >
    <div
      class="grid h-full grid-cols-5 grid-rows-10 gap-1.5 p-4"
    >
      <div
        v-for="(pos, i) in side === 'left' ? leftPattern : rightPattern"
        :key="i"
        class="rounded-sm bg-slate-100 opacity-60"
        :style="{
          gridRow: pos[0] + 1,
          gridColumn: pos[1] + 1,
        }"
      />
    </div>
  </div>
</template>
