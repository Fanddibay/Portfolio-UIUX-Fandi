import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { syncLocaleFromQuery } from '@/i18n'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { titleKey: 'nav.work', descriptionKey: 'hero.subheading' },
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('@/views/HomeView.vue'),
    meta: { titleKey: 'work.title', descriptionKey: 'work.meta' },
  },
  {
    path: '/work/:slug',
    name: 'CaseStudy',
    component: () => import('@/views/CaseStudyView.vue'),
    meta: { titleKey: 'caseStudy', descriptionKey: 'caseStudy' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { titleKey: 'about.title', descriptionKey: 'about.meta' },
  },
  {
    path: '/writing',
    name: 'Writing',
    component: () => import('@/views/WritingView.vue'),
    meta: { titleKey: 'writing.title', descriptionKey: 'writing.title' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { titleKey: 'contact.title', descriptionKey: 'contact.meta' },
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/ResumeView.vue'),
    meta: { titleKey: 'resume.title', descriptionKey: 'resume.meta' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach((_to, _from, next) => {
  syncLocaleFromQuery()
  next()
})

export default router
