import HomePage from "@pages/HomePage";
import "@styles/styles.css";
import "@styles/fonts.css";
import LoadingPage from "./components/pages/LoadingPage";
import TransitionAnim from "@/components/TransitionAnim";
import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScreenInverseFilter from "./components/ScreenInverseFilter";

export const TransitionContext = createContext<any>(null);
export const ThemeContext = createContext<any>(null);

function App() {
  const [transition, setTransition] = useState<string | null>(null);
  const [isDarkmode, setDarkmode] = useState<boolean>(false);

  const handleTransitionTo = (link: string) => {
    setTransition(link);
  };
  const handleFinishTransition = () => {
    setTransition(null);
  };
  const handleToggleTheme = () => {
    setDarkmode(!isDarkmode);
  };

  return (
    <>
      <TransitionContext.Provider
        value={{
          handleTransitionTo: handleTransitionTo,
          handleFinishTransition: handleFinishTransition,
        }}
      >
        <ThemeContext.Provider
          value={{
            handleToggleTheme: handleToggleTheme,
            isDarkmode: isDarkmode,
          }}
        >
          <Router basename="math102-creative-work">
            {/*used for darkmode */}
            <ScreenInverseFilter>
              {!!transition && <TransitionAnim />}
              <Routes>
                <Route path="/start" element={<LoadingPage />} />
                <Route path="/main" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/start" />} />
              </Routes>
            </ScreenInverseFilter>
          </Router>
        </ThemeContext.Provider>
      </TransitionContext.Provider>
    </>
  );
}

export default App;
