import { useLanguageSwitch } from "@repo/i18n";
import AppProvider from "./provider/AppProvider";
import AppRouter from "./routes";
function App() {
  const { currentLanguage } = useLanguageSwitch();
  console.log("currentLanguage from app is ", currentLanguage);

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
