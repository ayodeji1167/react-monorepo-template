import { ClipboardIcon } from "@dataulinzi/assets/custom/ClipboardIcon";
import { EyeIcon } from "@dataulinzi/assets/custom/EyeIcon";
import { FileTextIcon } from "@dataulinzi/assets/custom/FileTextIcon";
import { InfoIcon } from "@dataulinzi/assets/custom/InfoIcon";
import { PencilIcon } from "@dataulinzi/assets/custom/PencilIcon";
import { ShieldCheckIcon } from "@dataulinzi/assets/custom/ShieldCheckIcon";
import { TaskIcon } from "@dataulinzi/assets/custom/TasksIcon";
import { TrashIcon } from "@dataulinzi/assets/custom/TrashIcon";
export const topCards = [
  {
    title: "Compliance Score",
    description: "Up 5% from last month",
    stats: "78%",
    color: "primary.50",
    icon: <ShieldCheckIcon color="primary.300" width="24px" height="24px" />,
  },
  {
    title: "Open Tasks",
    description: "2 require immediate attention",
    stats: "5",
    color: "secondary.50",
    icon: <TaskIcon color="secondary.400" width="24px" height="24px" />,
  },
  {
    title: "Active DSRRs",
    description: "Average resolution time: 2.3 days",
    stats: "3",
    color: "success.50",
    icon: <TaskIcon color="success.300" width="24px" height="24px" />,
  },
  {
    title: "Regulatory Updates",
    description: "New updates in the last 30 days",
    stats: "7",
    color: "primary.50",
    icon: <InfoIcon color="primary.300" width="24px" height="24px" />,
  },
];

export const progressBars = [
  {
    text: "Data Subject Rights",
    value: 92,
    color: "success.300",
  },
  {
    text: "Vendor Management",
    value: 65,
    color: "secondary.300",
  },
  {
    text: "Policy Documentation",
    value: 85,
    color: "success.300",
  },
  {
    text: "RoPA Management",
    value: 72,
    color: "secondary.300",
  },
  {
    text: "Risk Assessment",
    value: 48,
    color: "error.300",
  },
];

export const pendingTasks = [
  {
    title: "Update Privacy Policy",
    description: "Policy Management",
    status: "Pending",
    dueDate: "Due Today",
    icon: <FileTextIcon color="primary" width="24px" height="24px" />,
    isExpired: true,
  },
  {
    title: "Complete Vendor Assessment",
    description: "Vendor Management",
    status: "Pending",
    dueDate: "Due in 3 days",
    icon: <FileTextIcon color="primary" width="24px" height="24px" />,
    isExpired: false,
  },
  {
    title: "Review DPIA Assessment",
    description: "Risk Assessment",
    status: "Pending",
    dueDate: "Overdue by 2 days",
    icon: <ClipboardIcon color="primary" width="24px" height="24px" />,
    isExpired: true,
  },
];

export const dataSubject = [
  {
    title: "Access Request (DSRR-2025-012)",
    description: "James Williams (customer)",
    status: "In Progress",
    dueDate: "Due in 20 days",
    icon: <EyeIcon color="primary.300" width="24px" height="24px" />,
    isExpired: false,
  },
  {
    title: "Deletion Request (DSRR-2025-011)",
    description: "Sarah Johnson (employee)",
    status: "In Progress",
    dueDate: "Due in 5 days",
    icon: <TrashIcon color="primary.300" width="24px" height="24px" />,
    isExpired: false,
  },
  {
    title: "Rectification Request (DSRR-2025-010)",
    description: "David Smith (customer)",
    status: "Completed",
    dueDate: "Completed Mar 15, 2025",
    icon: <PencilIcon color="primary.300" width="24px" height="24px" />,
    isExpired: true,
  },
];
