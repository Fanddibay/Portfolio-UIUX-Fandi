export interface Prototype {
  id: string
  title: string
  description: string
  thumbnail: string
  link?: string
  action: 'try' | 'view'
}

export const prototypes: Prototype[] = [
  {
    id: 'proto-1',
    title: 'Dashboard Components',
    description: 'Interactive data viz and filters',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=340&fit=crop',
    link: '#',
    action: 'try',
  },
  {
    id: 'proto-2',
    title: 'Onboarding Flow',
    description: 'Step-by-step wizard prototype',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=340&fit=crop',
    link: '#',
    action: 'view',
  },
  {
    id: 'proto-3',
    title: 'Settings Panel',
    description: 'Form and toggle interactions',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=340&fit=crop',
    link: '#',
    action: 'try',
  },
  {
    id: 'proto-4',
    title: 'Chart Builder',
    description: 'Drag-and-drop chart config',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=340&fit=crop',
    link: '#',
    action: 'view',
  },
  {
    id: 'proto-5',
    title: 'Navigation Patterns',
    description: 'Sidebar and breadcrumbs',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=340&fit=crop',
    link: '#',
    action: 'view',
  },
  {
    id: 'proto-6',
    title: 'Modal & Drawer',
    description: 'Overlay and sheet patterns',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=340&fit=crop',
    link: '#',
    action: 'try',
  },
]
