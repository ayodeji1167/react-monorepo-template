import type { ComponentType } from "react";

export interface TabContentProps<T = any> {
  value: string;
  component: ComponentType<any>;
  activeTab: string | null;
  sharedData?: T;
  setActiveTab?: any;
}

export interface SectionConfig {
  value: string;
  label: string;
  component: ComponentType<any>;
}
