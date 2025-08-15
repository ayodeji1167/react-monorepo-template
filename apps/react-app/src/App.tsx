import "./App.css";
import { useLanguageSwitch } from "@repo/i18n";
import AppProvider from "./provider/AppProvider";
import { Box } from "@chakra-ui/react";
function App() {
  const { currentLanguage } = useLanguageSwitch();
  console.log("currentLanguage from app is ", currentLanguage);

  return (
    <AppProvider>
      <Box bg={"black"}></Box>
    </AppProvider>
  );
}

export default App;
