export interface Project {
  slug: string
  title: string
  subtitle: string
  year: string
  role: string
  tags: string[]
  status: 'Live' | 'NDA' | 'Coming soon'
  coverImage: string
  externalLink?: string
  tools?: string[]
  timeline?: string
}

export const projects: Project[] = [
  {
    slug: 'Mony App',
    title: 'Mony App',
    subtitle: 'B2B analytics and reporting platform for finance teams',
    year: '2024',
    role: 'UI/UX Designer & Engineer',
    tags: ['Dashboard', 'SaaS', 'B2B'],
    status: 'Live',
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/82ce4b163173421.Y3JvcCw4MTYsNjM4LDAsMA.png',
    tools: ['Figma', 'Vue', 'Cursor'],
    timeline: 'Q2–Q3 2024',
  },
  {
    slug: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    subtitle: 'Appointment booking and medical records for clinics',
    year: '2024',
    role: 'UI/UX Designer',
    tags: ['Healthcare', 'Dashboard'],
    status: 'Live',
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/f3e1e8162314113.Y3JvcCwzMjMyLDI1MjgsMCww.png',
    tools: ['Figma', 'Lovable'],
    timeline: 'Q1 2024',
  },
  {
    slug: 'ecommerce-admin',
    title: 'E‑commerce Admin Dashboard',
    subtitle: 'Inventory, orders, and analytics in one place',
    year: '2023',
    role: 'UI/UX Designer & Web Designer',
    tags: [ 'Insurance', 'Web App'],
    status: 'NDA',
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/fc160e162621569.Y3JvcCw4MDgsNjMyLDAsMA.png',
    tools: ['Figma', 'Cursor'],
    timeline: '2025',
  },
  {
    slug: 'startup-landing-website',
    title: 'Startup Landing & Marketing Site',
    subtitle: 'Conversion-focused landing and blog for a SaaS startup',
    year: '2023',
    role: 'Web Designer',
    tags: ['Landing Page', 'Marketing', 'SaaS'],
    status: 'Live',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    tools: ['Figma', 'ChatGPT'],
    timeline: '2023',
  },
  {
    slug: 'internal-tool-nda',
    title: 'Internal Operations Tool',
    subtitle: 'Workflow and task management for enterprise',
    year: '2023',
    role: 'UI/UX Engineer',
    tags: ['Landing Page', 'Marketing', 'Company Profile'],
    status: 'NDA',
    coverImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop',
    tools: ['Figma', 'Vue', 'Cursor'],
    timeline: '2023',
  },
  {
    slug: 'mobile-first-webapp',
    title: 'Mobile-First Field App',
    subtitle: 'Data collection and reporting for field teams',
    year: '2024',
    role: 'UI/UX Designer & Engineer',
    tags: ['Web App', 'Mobile-first', 'Money Tracking'],
    status: 'Coming soon',
    coverImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
    tools: ['Figma', 'Cursor'],
    timeline: 'Q4 2024',
  },
  // Dummy: Landing Page
  {
    slug: 'product-landing-page',
    title: 'Product Landing Page',
    subtitle: 'High-converting landing page for a productivity SaaS',
    year: '2024',
    role: 'Web Designer',
    tags: ['Web App', 'Marketing', 'Money Tracking'],
    status: 'Live',
    coverImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
    tools: ['Figma', 'Cursor'],
    timeline: '2024',
  },
  {
    slug: 'agency-website',
    title: 'Agency Marketing Website',
    subtitle: 'Brand and lead-generation site for a design agency',
    year: '2023',
    role: 'Web Designer',
    tags: ['Landing Page', 'Marketing'],
    status: 'Live',
    coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
    tools: ['Figma', 'Lovable'],
    timeline: '2023',
  },
  // Dummy: Web Design (additional)
  {
    slug: 'brand-website-redesign',
    title: 'Brand Website Redesign',
    subtitle: 'Full visual and UX refresh for an e-commerce brand',
    year: '2023',
    role: 'UI/UX Designer & Web Designer',
    tags: ['Mobile App', 'Redesign', 'Case Study'],
    status: 'Live',
    coverImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop',
    tools: ['Figma', 'Cursor'],
    timeline: '2023',
  },
  // {
  //   slug: 'portfolio-website',
  //   title: 'Portfolio & Showcase Website',
  //   subtitle: 'Minimal portfolio site with case studies and contact',
  //   year: '2024',
  //   role: 'Web Designer',
  //   tags: ['Website', 'Web Design'],
  //   status: 'Live',
  //   coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop',
  //   tools: ['Figma', 'Vue', 'Cursor'],
  //   timeline: '2024',
  // },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(currentSlug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === currentSlug)
  if (idx < 0 || idx >= projects.length - 1) return undefined
  return projects[idx + 1]
}

export function getPrevProject(currentSlug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === currentSlug)
  if (idx <= 0) return undefined
  return projects[idx - 1]
}
