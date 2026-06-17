import { onMounted, onUnmounted, type Ref } from 'vue'

export function useReveal(el: Ref<HTMLElement | null>, options?: IntersectionObserverInit) {
  let observer: IntersectionObserver | null = null
  let nodes: NodeListOf<Element> | null = null

  onMounted(() => {
    const target = el.value
    if (!target) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    )

    nodes = target.querySelectorAll('.reveal')
    nodes.forEach((node) => observer!.observe(node))
  })

  onUnmounted(() => {
    if (observer && nodes) {
      nodes.forEach((node) => observer!.unobserve(node))
    }
  })
}
