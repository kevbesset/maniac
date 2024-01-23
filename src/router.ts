import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EmptyLayout from '@/components/layouts/EmptyLayout.vue'
import { RouteContext, RouteMiddleware } from '@/types/Router.type'
import { RouteName } from '@/vars/RouteName'

// Non-chunked views

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.HOME,
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundPage.vue'),
    meta: {
      layout: EmptyLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(
  context: RouteContext,
  middleware: RouteMiddleware[],
  nextIndex: number
) {
  const subsequentMiddleware = middleware[nextIndex]
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next

  return () => {
    // Run the default Vue Router `next()` callback first.
    // context.next(...parameters)
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, nextIndex + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  let middlewares: RouteMiddleware[] = [] // default middleware
  if (to.meta.middleware) {
    const routeMiddlewares = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]
    middlewares = middlewares.concat(routeMiddlewares)
  }

  const context = {
    from,
    next,
    router,
    to
  }
  const nextMiddleware = nextFactory(context, middlewares, 1)

  if (middlewares.length === 0) {
    return next()
  }

  return middlewares[0]({ ...context, next: nextMiddleware })
})

export default router
