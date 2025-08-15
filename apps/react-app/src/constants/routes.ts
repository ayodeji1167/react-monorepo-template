import { defineRoute } from "@repo/utils";

// Define routes sectioned by modules
// Each module is an object containing related routes
// Example modules: dashboard (core views), users (user management), settings (configuration)
const OverviewRoutePaths = {
  // Overview module routes
  overview: defineRoute("/" as const), // e.g., path: '/overview/:id', generate({ id: 12 }) -> '/overview/12'
  overviewDetails: defineRoute("/overview/:id" as const), // e.g., path: '/overview/:id', generate({ id: 12 }) -> '/overview/12'
  summary: defineRoute("/summary" as const), // No params: generate({}) -> '/summary'
  analytics: defineRoute("/analytics/:date/:filter" as const), // Multiple params: generate({ date: '2025-08-15', filter: 'all' }) -> '/analytics/2025-08-15/all'
} as const;

const AuthRoutesPaths = {
  // User management module routes
  login: defineRoute("/auth/login" as const), // generate({}) -> '/users'
  signup: defineRoute("/auth/signup" as const), // generate({ userId: 123 }) -> '/users/123'
} as const;

const SettingsRoutes = {
  // Settings module routes
  profile: defineRoute("/settings/profile" as const), // generate({}) -> '/settings/profile'
  account: defineRoute("/settings/account/:tab" as const), // generate({ tab: 'security' }) -> '/settings/account/security'
  notifications: defineRoute("/settings/notifications" as const),
} as const;

// Combine all modules into a single Routes object for easy import
// You can add more modules as needed (e.g., billing, reports)
export const RouteConstants = {
  overview: OverviewRoutePaths,
  auth: AuthRoutesPaths,
  settings: SettingsRoutes,
} as const;

// Type for the entire Routes structure (inferred for type safety)
export type AppRoutes = typeof RouteConstants;
