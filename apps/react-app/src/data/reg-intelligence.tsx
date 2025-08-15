import { ClipboardTextIcon } from "@dataulinzi/assets/custom/ClipboardTextIcon";
import { GavelIcon } from "@dataulinzi/assets/custom/GavelIcon";
import { GlobeIcon } from "@dataulinzi/assets/custom/GlobeIcon";

export const topCards = [
  {
    title: "Countries Covered",
    description: "Added 3 new countries this month",
    stats: "42",
    color: "primary.50",
    icon: <GlobeIcon color="primary.300" width="24px" height="24px" />,
  },
  {
    title: "Countries with DPAs",
    description: "2 new DPAs established in the last 30 days",
    stats: "28",
    color: "warning.50",
    icon: <GavelIcon color="warning.400" width="24px" height="24px" />,
  },
  {
    title: "Data Protection Laws",
    description: "Updated 5 laws in the last month",
    stats: "31",
    color: "success.50",
    icon: <ClipboardTextIcon color="success.300" width="24px" height="24px" />,
  },
];
