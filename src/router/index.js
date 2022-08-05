import { createRouter, createWebHistory } from 'vue-router'

const route = (path, name, redirect = false, beforeEnter) => {
  return {
    path,
    name,
    redirect,
    beforeEnter,
    component: (resolve) => import(`@/pages/${name}.vue`).then(resolve)
  }
}

const routes = [route('/', 'PageMain'), route('/:catchAll(.*)', 'Error404')]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
