/* eslint-disable @typescript-eslint/no-unused-vars */
// src/routes.ts
// This file defines a robust, type-safe route constants factory for React Router in a React TypeScript application.
// Routes are sectioned by modules (e.g., dashboard, users, settings) to organize the dashboard structure.
// Each module contains route definitions with:
// - `path`: The React Router path string (e.g., '/overview/:id').
// - `generate`: A function to generate the actual URL by providing required path params and optional query params.
// Path params are extracted and type-enforced from the path string.
// Missing params throw a runtime error for safety.
// Values are URL-encoded for robustness.
// Query params are appended using URLSearchParams for proper encoding and handling.

// Utility types to extract param keys from path strings (e.g., '/overview/:id' -> 'id')
type PathParam<Path extends string> =
  Path extends `${infer _Prefix}/:${infer Param}/${infer Rest}`
    ? Param | PathParam<`/${Rest}`>
    : Path extends `${infer _Prefix}/:${infer Param}`
      ? Param
      : never;

// Type for required params object (keys from path, values as string | number)
type Params<Path extends string> = {
  [Key in PathParam<Path>]: string | number;
};

// Interface for a single route definition
interface Route<Path extends string> {
  path: Path;
  generate: (
    params: Params<Path>,
    query?: Record<string, string | number | boolean>,
  ) => string;
}

// Factory function to create a route with type-safe generate method
function defineRoute<Path extends string>(path: Path): Route<Path> {
  return {
    path,
    generate: (params, query) => {
      // Replace :param placeholders with provided values, checking for missing params and encoding
      let url = path.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
        if (!(key in params)) {
          throw new Error(
            `Missing required path parameter: ${key} for path "${path}"`,
          );
        }
        const value = params[key as keyof typeof params];
        if (value === undefined || value === null) {
          throw new Error(
            `Path parameter "${key}" cannot be undefined or null`,
          );
        }
        return encodeURIComponent(value.toString());
      });

      // Append query params if provided
      if (query && Object.keys(query).length > 0) {
        const searchParams = new URLSearchParams();
        for (const [k, v] of Object.entries(query)) {
          if (v !== undefined && v !== null) {
            searchParams.append(k, v.toString());
          }
        }
        if (searchParams.toString()) {
          url += `?${searchParams.toString()}`;
        }
      }

      return url;
    },
  };
}

// Define routes sectioned by modules
// Each module is an object containing related routes
// Example modules: dashboard (core views), users (user management), settings (configuration)
const DashboardRoutes = {
  // Overview module routes
  overview: defineRoute("/overview/:id" as const), // e.g., path: '/overview/:id', generate({ id: 12 }) -> '/overview/12'
  summary: defineRoute("/summary" as const), // No params: generate({}) -> '/summary'
  analytics: defineRoute("/analytics/:date/:filter" as const), // Multiple params: generate({ date: '2025-08-15', filter: 'all' }) -> '/analytics/2025-08-15/all'
} as const;

const UserRoutes = {
  // User management module routes
  list: defineRoute("/users" as const), // generate({}) -> '/users'
  detail: defineRoute("/users/:userId" as const), // generate({ userId: 123 }) -> '/users/123'
  edit: defineRoute("/users/:userId/edit/:section" as const), // generate({ userId: 123, section: 'profile' }) -> '/users/123/edit/profile'
} as const;

const SettingsRoutes = {
  // Settings module routes
  profile: defineRoute("/settings/profile" as const), // generate({}) -> '/settings/profile'
  account: defineRoute("/settings/account/:tab" as const), // generate({ tab: 'security' }) -> '/settings/account/security'
  notifications: defineRoute("/settings/notifications" as const),
} as const;

// Combine all modules into a single Routes object for easy import
// You can add more modules as needed (e.g., billing, reports)
export const Routes = {
  dashboard: DashboardRoutes,
  users: UserRoutes,
  settings: SettingsRoutes,
} as const;

// Type for the entire Routes structure (inferred for type safety)
export type AppRoutes = typeof Routes;

// Usage examples:
// In React Router setup (e.g., in App.tsx or router config):
// import { Routes } from './routes';
// <Route path={Routes.dashboard.overview.path} element={<Overview />} />
//
// To generate a link (e.g., in a component):
// const overviewUrl = Routes.dashboard.overview.generate({ id: 12 }, { sort: 'desc', page: 2 });
// // Result: '/overview/12?sort=desc&page=2'
//
// Type safety: TS will error if you pass wrong/missing params, e.g.:
// Routes.dashboard.overview.generate({ wrong: 1 }) // TS error: missing 'id'
// Routes.users.list.generate({ id: 1 }) // TS error: no 'id' expected
//
// Robustness notes:
// - Params are required based on path definition; missing ones throw errors.
// - Values are coerced to string and URL-encoded.
// - Query params are optional, encoded, and skipped if undefined/null.
// - Supports multiple params, nested paths.
// - Easily extensible: Add new modules or routes without breaking existing ones.
// - No external dependencies; pure TS for type inference.
