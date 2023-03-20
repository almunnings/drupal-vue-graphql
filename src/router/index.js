import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/index"),
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: () => import("@/pages/404.vue"),
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
