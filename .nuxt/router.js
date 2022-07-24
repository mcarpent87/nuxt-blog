import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a264ed0a = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7b5c2cff = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _38d72331 = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _ace27e18 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _487641df = () => interopDefault(import('../pages/users/_id/index.vue' /* webpackChunkName: "pages/users/_id/index" */))
const _ca73a35c = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _eff278d2 = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _6379b3a6 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _5e48b06a = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _19256e0a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _a264ed0a,
    name: "admin"
  }, {
    path: "/posts",
    component: _7b5c2cff,
    name: "posts"
  }, {
    path: "/users",
    component: _38d72331,
    children: [{
      path: "",
      component: _ace27e18,
      name: "users"
    }, {
      path: ":id",
      component: _487641df,
      name: "users-id"
    }]
  }, {
    path: "/admin/auth",
    component: _ca73a35c,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _eff278d2,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _6379b3a6,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _5e48b06a,
    name: "posts-id"
  }, {
    path: "/",
    component: _19256e0a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
