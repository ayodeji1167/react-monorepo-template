export const RouteConstants = {
  auth: {
    login: "/auth/login",
  },
  overview: {
    base: "/",
    maturityReport: "/maturity-report",
  },
  dataInventory: {
    base: "/data-inventory",
    detail: "/data-inventory/:id",
    processingActivityDetails:
      "/data-inventory/:dataInventoryId/processing-activity/:processingActivityId",
    edit: "/data-inventory/edit/:id",
    addNewSystem: "/data-inventory/new",
    quickSetup: "/data-inventory/quick-setup",
    advanceSetup: "/data-inventory/advance-setup",
    generateRopa: "/data-inventory/generate-ropa",
    systemSuccessDetails: "/data-inventory/systems/success/:id",
    templateLibrary: "/data-inventory/templates-library",
    importRopa: "/data-inventory/ropa-import",
    ropaSuccess: "/data-inventory/ropa-success/:id",
  },
  tasks: {
    base: "/tasks",
    detail: "/tasks/:id",
  },
  regulatoryIntelligence: {
    base: "/regulatory-intelligence",
    detail: "/regulatory-intelligence/:id",
  },
  dataSubjectRight: {
    base: "/data-subject-right",
    detail: "/data-subject-right/:id",
  },
  riskManagement: {
    base: "/risk-management",
    detail: "/risk-management/:id",
  },
  vendorManagement: {
    base: "/vendor-management",
    detail: "/vendor-management/:id",
  },
  policyManagement: {
    base: "/policy-management",
    detail: "/policy-management/:id",
  },
  auditAssessments: {
    base: "/audit-assessments",
    detail: "/audit-assessments/:id",
  },
  obligationBot: {
    base: "/obligation-bot",
    detail: "/obligation-bot/:id",
  },
  trustCenter: {
    base: "/trust-center",
    detail: "/trust-center/:id",
  },
  accountSettings: {
    base: "/account-settings",
    detail: "/account-settings/:id",
  },
  teamManagement: {
    base: "/team-management",
    detail: "/team-management/:id",
  },
};
