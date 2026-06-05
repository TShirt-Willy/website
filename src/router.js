import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', redirect: { name: 'home', query: { section: 'referenzen' } } },
    { path: '/kontakt', redirect: { name: 'home', query: { section: 'vertrieb' } } },
    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.name === 'home' && !to.query.section) {
      return { top: 0 }
    }

    return {}
  },
})
