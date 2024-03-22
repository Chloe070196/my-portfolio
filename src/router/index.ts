import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/projects/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/ContactView.vue')
    },
    {
      path: '/lesson-booking-project-walkthrough',
      name: 'lesson-booking-project-walkthrough',
      component: () => import('../views/lesson-booking-project/LessonBookingProjectWalkthrough.vue')
    },
    {
      path: '/phrase-learning-app-walkthrough',
      name: 'phrase-learning-app-walkthrough',
      component: () => import('../views/phrase-learning-app/PhraseLearningAppWalkthrough.vue')
    }
  ]
})

export default router
