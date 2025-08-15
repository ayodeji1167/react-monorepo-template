export const ropaStatusOptions = [
  {
    label: "All Statuses",
    value: "",
  },
  {
    label: "Completed",
    value: "Completed",
  },
  {
    label: "Draft",
    value: "Draft",
  },
  {
    label: "Pending Approval",
    value: "PendingApproval",
  },
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Under Review",
    value: "UnderReview",
  },
  {
    label: "Archived",
    value: "Archived",
  },
  {
    label: "Review Due",
    value: "ReviewDue",
  },
];
export const ropaRiskLevelOptions = [
  {
    label: "All Levels",
    value: "",
  },
  {
    label: "Medium",
    value: "Medium",
  },
  {
    label: "High",
    value: "High",
  },
  {
    label: "Critical",
    value: "Critical",
  },
  {
    label: "Low",
    value: "Low",
  },
];

export const retentionPeriodOptions = Array.from({ length: 10 }).map(
  (_, index) => ({ label: String(index + 1), value: String(index + 1) }),
);

export const retentionDurationOptions = ["Years", "Months", "Days"].map(
  (item) => ({
    label: item,
    value: item,
  }),
);
