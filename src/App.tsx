import HomePage from "@pages/HomePage";
import "@styles/styles.css";
import "@styles/fonts.css";
import StartingPage from "./components/pages/StartingPage";
import TransitionAnim from "@/components/TransitionAnim";
import { createContext, useState } from "react";
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

  /**
   * @param link
   */
  const handleTransitionTo = (link: string) => {
    setTransition(link);
  };
  /**
   * @param none
   * @return void
   */
  const handleFinishTransition = () => {
    setTransition(null);
  };
  /**
   * @param none
   * @return void
   */
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
              {!!transition && <TransitionAnim transition={transition} />}
              <Routes>
                <Route path="/start" element={<StartingPage />} />
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
