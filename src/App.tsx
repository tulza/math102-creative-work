import HomePage from "@pages/HomePage";
import "@styles/styles.css";
import "@styles/fonts.css";
import LoadingPage from "@/components/pages/LoadingPage";
import TransitionAnim from "@/components/TransitionAnim";
import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export const TransitionContext = createContext<any>(null);

function App() {
  const [transition, setTransition] = useState<string | null>(null);
  const handleTransitionTo = (link: string) => {
    setTransition(link);
  };
  const handleFinishTransition = () => {
    setTransition(null);
  };
  useEffect(() => {
    console.log(transition);
  }, [transition]);

  return (
    <>
      <TransitionContext.Provider
        value={{
          handleTransitionTo: handleTransitionTo,
          handleFinishTransition: handleFinishTransition,
        }}
      >
        <Router basename="math102-creative-work">
          {!!transition && <TransitionAnim />}
          <Routes>
            <Route path="/start" element={<LoadingPage />} />
            <Route path="/main" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/start" />} />
          </Routes>
        </Router>
      </TransitionContext.Provider>
    </>
  );
}

export default App;
