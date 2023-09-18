import adminRoutes from "./admin"
type routesPush = {
  path?: string,
  meta?: Record<string, any>,
  routes?: Record<string, any>[]
}[]
const routes: routesPush = [
  adminRoutes
]
export default routes