import { type RouteConfig, index, layout, prefix } from '@react-router/dev/routes'

export default [
  layout('layouts/auth.layout.tsx', [index('routes/login.page.tsx')]),
  ...prefix('admin', [layout('layouts/admin.layout.tsx', [index('routes/welcome.page.tsx')])]),
] satisfies RouteConfig
