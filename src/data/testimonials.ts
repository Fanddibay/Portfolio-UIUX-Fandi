export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Fandi delivered a clean, intuitive dashboard that our team actually enjoys using. Great communication and on-time delivery.',
    author: 'Sarah Chen',
    role: 'Product Lead',
    company: 'TechStart Inc.',
    avatar: '/placeholders/avatar-1.jpg',
  },
  {
    id: 't2',
    quote: 'Professional UI/UX work and solid front-end implementation. Would hire again for web app projects.',
    author: 'Marcus Webb',
    role: 'Founder',
    company: 'SaaS Co.',
    avatar: '/placeholders/avatar-2.jpg',
  },
  {
    id: 't3',
    quote: 'Clear design thinking and fast iteration. The dashboard we built together is now core to our operations.',
    author: 'Dewi Kusuma',
    role: 'Operations Manager',
    company: 'Logistics ID',
    avatar: '/placeholders/avatar-3.jpg',
  },
  {
    id: 't4',
    quote: 'Excellent balance of aesthetics and usability. Fandi understood our users and delivered accordingly.',
    author: 'James Park',
    role: 'CTO',
    company: 'HealthTech',
    avatar: '/placeholders/avatar-4.jpg',
  },
  {
    id: 't5',
    quote: 'Smooth collaboration from discovery to handoff. The design system he set up saved us a lot of time.',
    author: 'Ana Rodriguez',
    role: 'Design Lead',
    company: 'Finance App',
    avatar: '/placeholders/avatar-5.jpg',
  },
]
