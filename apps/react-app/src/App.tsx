import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { capitalize } from "@repo/utils";
import { useLanguageSwitch, useTranslation } from "@repo/i18n";
function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage } = useLanguageSwitch();
  console.log("currentLanguage from app is ", currentLanguage);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{t("welcome")}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {capitalize("this is a new one")} count is {count}
        </button>
        <div>
          <button
            onClick={() => {
              console.log(currentLanguage);

              changeLanguage(currentLanguage === "en" ? "fr" : "en");
            }}
          >
            Current language is {currentLanguage}
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
