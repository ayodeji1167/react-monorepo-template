/* eslint-disable @typescript-eslint/no-explicit-any */
import { createI18nInstanceForReact, I18nextProvider } from "@repo/i18n";

export default function AppProvider({ children }: { children: any }) {
  const i18Config = createI18nInstanceForReact();
  return <I18nextProvider i18n={i18Config}>{children}</I18nextProvider>;
}
