export const QUERY_PATH = {
  auth: {
    login: "auth/login",
    getOtp: "auth/get-otp",
    refreshToken: "auth/refresh-tokens",
    getCurrentUser: "auth/me",
    getUserOrganization: "/organizations",
  },
  countries: {
    base: "/countries",
    country: "/countries/:id",
  },
  dataInventoryItems: {
    base: "/data-inventory-items",
    overview: "/data-inventory-items/overview",
  },
  ropaTemplate: {
    base: "/ropa-templates",
  },
  dataInventoryAssesments: {
    base: "/data-inventory-assessments",
  },
  dataInventoryActivity: {
    base: "/data-inventory-activities",
  },
  regIntel: {
    base: "/regulatory-intelligence",
    overview: "/regulatory-intelligence/overview",
    alerts: "/regulatory-alerts",
    alert: "/regulatory-alerts/:id",
  },
  user: {
    base: "/me",
  },
  departments: {
    base: "/departments",
  },
  lawLens: {
    base: "/law-lens",
    lawlen: "/law-lens/:id",
  },
  processingPurpose: {
    base: "/processing-purposes",
  },
  retentionBasis: {
    base: "/data-retention-basis",
  },
  dataCategory: {
    base: "/data-categories",
  },
  dataSubjectCategory: {
    base: "/data-subject-categories",
  },
  systems: {
    base: "/systems",
    overview: "/systems/overview",
  },
  processingActivity: {
    base: "/processing-activities",
  },
  systemType: {
    base: "/system-types",
  },
  legalBasis: {
    base: "/legal-basis",
  },
  processingLocation: {
    base: "/processing-locations",
  },
  sanctions: {
    base: "/dpo-sanctions",
    sanction: "/dpo-sanctions/:id",
  },
};
