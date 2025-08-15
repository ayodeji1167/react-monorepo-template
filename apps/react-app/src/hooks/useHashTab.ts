import { useState, useEffect, useCallback } from "react";

export interface TabConfig {
  value: string;
  label: string;
  component?: React.ComponentType<any>;
}

export interface UseHashTabsOptions {
  /**
   * Array of tab configurations
   */
  tabs: TabConfig[];
  /**
   * Default tab value to show when no hash is present or hash is invalid
   */
  defaultTab?: string;
  /**
   * Prefix for the hash (e.g., 'section' will create '#section-tabname')
   * If not provided, uses the tab value directly as hash
   */
  hashPrefix?: string;
  /**
   * Whether to replace the current history entry or push a new one when user clicks tabs
   * Note: Initial/default hash always uses replaceState to avoid back button issues
   * @default false (pushes new entry)
   */
  replaceHistory?: boolean;
  /**
   * Whether to automatically add hash for default tab when landing on page without hash
   * @default true
   */
  autoAddDefaultHash?: boolean;
  /**
   * Custom hash parser function
   * @param hash - The current window.location.hash
   * @returns The tab value or null if invalid
   */
  parseHash?: (hash: string) => string | null;
  /**
   * Custom hash formatter function
   * @param tabValue - The tab value to format
   * @returns The hash string (without #)
   */
  formatHash?: (tabValue: string) => string;
}

export interface UseHashTabsReturn {
  /**
   * Currently active tab value
   */
  activeTab: string;
  /**
   * Function to change the active tab
   */
  setActiveTab: (tabValue: string) => void;
  /**
   * Array of valid tab values
   */
  validTabs: string[];
  /**
   * Check if a tab value is valid
   */
  isValidTab: (tabValue: string) => boolean;
  /**
   * Get the current hash for the active tab
   */
  getCurrentHash: () => string;
}

/**
 * A robust hook for managing tab state using URL hash
 * Provides persistence, shareability, and history management
 */
export const useHashTabs = (options: UseHashTabsOptions): UseHashTabsReturn => {
  const {
    tabs,
    defaultTab,
    hashPrefix,
    replaceHistory = false,
    autoAddDefaultHash = true,
    parseHash,
    formatHash,
  } = options;

  // Extract valid tab values
  const validTabs = tabs.map((tab) => tab.value);

  // Use first tab as fallback if no default provided
  const fallbackTab = defaultTab || validTabs[0];

  if (!fallbackTab) {
    throw new Error("useHashTabs: No tabs provided or defaultTab specified");
  }

  // Default hash parser
  const defaultParseHash = useCallback(
    (hash: string): string | null => {
      if (!hash || !hash.startsWith("#")) return null;

      const hashValue = hash.substring(1); // Remove #

      if (hashPrefix) {
        const prefix = `${hashPrefix}-`;
        if (hashValue.startsWith(prefix)) {
          return hashValue.substring(prefix.length);
        }
        return null;
      }

      return hashValue;
    },
    [hashPrefix],
  );

  // Default hash formatter
  const defaultFormatHash = useCallback(
    (tabValue: string): string => {
      return hashPrefix ? `${hashPrefix}-${tabValue}` : tabValue;
    },
    [hashPrefix],
  );

  const parser = parseHash || defaultParseHash;
  const formatter = formatHash || defaultFormatHash;

  // Get initial tab from URL hash
  const getInitialTab = useCallback((): string => {
    if (typeof window === "undefined") return fallbackTab;

    const parsedTab = parser(window.location.hash);
    return parsedTab && validTabs.includes(parsedTab) ? parsedTab : fallbackTab;
  }, [parser, validTabs, fallbackTab]);

  const [activeTab, setActiveTabState] = useState<string>(getInitialTab);

  // Function to update both state and URL
  const setActiveTab = useCallback(
    (tabValue: string) => {
      if (!validTabs.includes(tabValue)) {
        console.warn(
          `useHashTabs: Invalid tab value "${tabValue}". Valid tabs: ${validTabs.join(", ")}`,
        );
        return;
      }

      const newHash = `#${formatter(tabValue)}`;

      if (typeof window !== "undefined") {
        if (replaceHistory) {
          window.history.replaceState(null, "", newHash);
        } else {
          window.history.pushState(null, "", newHash);
        }
      }

      setActiveTabState(tabValue);
    },
    [validTabs, formatter, replaceHistory],
  );

  // Listen for hash changes (back/forward navigation)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashChange = () => {
      const parsedTab = parser(window.location.hash);
      const newTab =
        parsedTab && validTabs.includes(parsedTab) ? parsedTab : fallbackTab;
      setActiveTabState(newTab);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Set initial hash if none exists or is invalid
    if (autoAddDefaultHash) {
      const currentParsedTab = parser(window.location.hash);
      if (!currentParsedTab || !validTabs.includes(currentParsedTab)) {
        const initialHash = `#${formatter(fallbackTab)}`;
        // ALWAYS replace history for initial/default hash to avoid creating new history entry
        // This ensures that when user clicks back, they go to previous page, not previous hash state
        window.history.replaceState(null, "", initialHash);
      }
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [parser, validTabs, fallbackTab, formatter, autoAddDefaultHash]);

  // Utility functions
  const isValidTab = useCallback(
    (tabValue: string): boolean => {
      return validTabs.includes(tabValue);
    },
    [validTabs],
  );

  const getCurrentHash = useCallback((): string => {
    return `#${formatter(activeTab)}`;
  }, [formatter, activeTab]);

  return {
    activeTab,
    setActiveTab,
    validTabs,
    isValidTab,
    getCurrentHash,
  };
};
