import { RouteConstants } from "@/shared/constants/routes";
import { BuildingIcon } from "@dataulinzi/assets/custom/BuildingIcon";
import { DashboardIcon } from "@dataulinzi/assets/custom/DashboardIcon";
import { GearIcon } from "@dataulinzi/assets/custom/GearIcon";
import { LightBulbIcon } from "@dataulinzi/assets/custom/LightBulbIcon";
import { RobotIcon } from "@dataulinzi/assets/custom/RobotIcon";
import { ShieldCheckIcon } from "@dataulinzi/assets/custom/ShieldCheckIcon";
import { SparkleIcon } from "@dataulinzi/assets/custom/SparkleIcon";
import { TaskIcon } from "@dataulinzi/assets/custom/TasksIcon";
import { UserFocusIcon } from "@dataulinzi/assets/custom/UserFocusIcon";
import { UsersIcon } from "@dataulinzi/assets/custom/UsersIcon";
import { CopyIcon } from "@dataulinzi/assets/custom/CopyIcon";
import { ClipboardIcon } from "@dataulinzi/assets/custom/ClipboardIcon";
import { FileTextIcon } from "@dataulinzi/assets/custom/FileTextIcon";
import { SignOutIcon } from "@dataulinzi/assets/custom/SignOutIcon";

export const sideBarItems = [
  {
    title: "PLATFORM",
    items: [
      {
        name: "Dashboard",
        icon: DashboardIcon,
        href: RouteConstants.overview.base,
        slug: "dashboard",
        paths: [
          RouteConstants.overview.base,
          RouteConstants.overview.maturityReport,
        ],
      },
      {
        name: "Tasks",
        icon: TaskIcon,
        href: RouteConstants.tasks.base,
      },
    ],
  },
  {
    title: "MODULES",
    items: [
      {
        name: "Regulatory Intelligence",
        icon: LightBulbIcon,
        href: RouteConstants.regulatoryIntelligence.base,
        slug: "regulatory-intelligence",
        paths: [
          RouteConstants.regulatoryIntelligence.base,
          RouteConstants.regulatoryIntelligence.detail,
        ],
      },
      {
        name: "Data Subject Right",
        icon: UserFocusIcon,
        href: RouteConstants.dataSubjectRight.base,
      },
      {
        name: "Data Inventory & RoPA",
        icon: FileTextIcon,
        href: RouteConstants.dataInventory.base,
        paths: [
          RouteConstants.dataInventory.base,
          RouteConstants.dataInventory.quickSetup,
          RouteConstants.dataInventory.advanceSetup,
          RouteConstants.dataInventory.detail,
          RouteConstants.dataInventory.generateRopa,
        ],
      },
      {
        name: "Risk Management",
        icon: ShieldCheckIcon,
        href: RouteConstants.riskManagement.base,
      },
      {
        name: "Vendor Management",
        icon: BuildingIcon,
        href: RouteConstants.vendorManagement.base,
      },
      {
        name: "Policy Management",
        icon: CopyIcon,
        href: RouteConstants.policyManagement.base,
      },
      {
        name: "Audit & Assessments",
        icon: ClipboardIcon,
        href: RouteConstants.auditAssessments.base,
      },
      {
        name: "Obligation Bot",
        icon: RobotIcon,
        href: RouteConstants.obligationBot.base,
      },
      {
        name: "Trust Center",
        icon: SparkleIcon,
        href: RouteConstants.trustCenter.base,
      },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      {
        name: "Account Settings",
        icon: GearIcon,
        href: RouteConstants.accountSettings.base,
      },
      {
        name: "Team Management",
        icon: UsersIcon,
        href: RouteConstants.teamManagement.base,
      },
      {
        name: "Logout",
        icon: SignOutIcon,
      },
    ],
  },
];
