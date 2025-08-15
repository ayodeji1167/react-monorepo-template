import { ChakraProvider } from "@chakra-ui/react";
import { createI18nInstance, I18nextProvider } from "@repo/i18n";
import { system } from "@repo/theme/chakra-ui";

export default function AppProvider({ children }: { children: any }) {
  const i18nInstance = createI18nInstance({ appName: "react-app" });
  return (
    <I18nextProvider i18n={i18nInstance}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </I18nextProvider>
  );
}
