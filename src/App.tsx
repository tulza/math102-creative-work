import HomePage from "@pages/HomePage";
import "@styles/styles.css";
import "@styles/fonts.css";
import LoadingPage from "./components/pages/LoadingPage";

function App() {
  return (
    <>
      <LoadingPage />
      <TransitionAnim />
      <HomePage />
    </>
  );
}

export default App;
