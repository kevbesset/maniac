import { RouteLocation, Router } from 'vue-router'

export type RouteMiddleware = (args: RouteContext) => void

export interface RouteContext {
  next: RouteNext
  from: RouteLocation
  router: Router
  to: RouteLocation
}

export type RouteNext = (...args: unknown[]) => void
