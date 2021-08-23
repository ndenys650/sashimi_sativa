import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
        component: () => import("@/layout/base/Index.vue"),
        children: [
          {
            path: "/",
            name: "Home",
            component: () => import("@/views/Home/Index.vue")
          },
          {
            path: "/menu",
            name: "Menu",
            component: () => import("@/views/Menu/Index.vue")
          },
          {
            path: "/find-a-store",
            name: "FindAStore",
            component: () => import("@/views/Find/Index.vue")
          },
          {
            path: "/rewards",
            name: "Rewards",
            component: () => import("@/views/Rewards/Index.vue")
          },
          {
            path: "/sign-in",
            name: "SignIn",
            component: () => import("@/views/SignIn/Index.vue")
          },
          {
            path: "/cart",
            name: "Cart",
            component: () => import("@/views/Cart/Index.vue")
          },
        ]
  }]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes
})

export default router
