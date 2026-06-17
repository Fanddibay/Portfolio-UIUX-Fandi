import { useHead } from '@vueuse/head'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://fandibayu.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export interface MetaOptions {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function usePageMeta(options: MetaOptions) {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  const canonical = options.canonical || `${SITE_URL}${path}`.replace(/\/$/, '') || SITE_URL
  const ogImage = options.ogImage || DEFAULT_OG_IMAGE

  useHead({
    title: options.title,
    meta: [
      { name: 'description', content: options.description },
      ...(options.noIndex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonical },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: ogImage },
    ],
    link: [{ rel: 'canonical', href: canonical }],
  })
}

export function useJsonLd(ld: object) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(ld),
      },
    ],
  })
}
