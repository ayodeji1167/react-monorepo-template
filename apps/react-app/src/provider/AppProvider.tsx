/* eslint-disable @typescript-eslint/no-explicit-any */
import { createI18nInstance, I18nextProvider } from "@repo/i18n";

export default function AppProvider({ children }: { children: any }) {
  const i18nInstance = createI18nInstance({ appName: "react-app" });
  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
