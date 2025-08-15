import type { ButtonProps } from "@chakra-ui/react";
import type { ComponentType } from "react";

export interface TabContentProps {
  value: string;
  component: ComponentType;
  activeTab: string | null;
}

export interface ActionButtonProps {
  icon: ComponentType<any>;
  text: string;
  variant?: ButtonProps["variant"];
  onClick?: () => void;
}

export interface SectionConfig {
  value: string;
  label: string;
  component: ComponentType;
  icon?: ComponentType<any>;
}

export interface SidebarItemProps {
  name: string;
  icon: any;
  href: string;
  slug?: string;
  paths?: string[];
}

export type TRiskLevel = "Low" | "Medium" | "High" | "Critical";
export type TRopaStatus =
  | "Draft"
  | "ReviewDue"
  | "PendingApproval"
  | "Active"
  | "Completed"
  | "UnderReview"
  | "Archived";

export interface IOrganization {
  id: string;
  name: string;
  email: string;
  logo: string;
  industry: string;
  website: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
export interface IGeneralMetaOptions {
  id: string;
  title: string;
  name: string;
  description?: string;
  organizationId?: string;
  createdAt: string;
  updatedAt: string;
  score?: number;
}
