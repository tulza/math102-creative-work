import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";

const HomePage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { handleToggleTheme } = useContext(ThemeContext);

  return (
    <div className="bold flex h-full w-full select-none flex-col justify-center bg-white p-10 text-black">
      <Button
        text="DarkTheme"
        className="absolute right-10 top-10 "
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={handleToggleTheme}
      />
      <Button
        text="Back"
        className="absolute left-10 top-10 "
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={() => {
          handleTransitionTo("start");
        }}
      />
    </div>
  );
};

export default HomePage;
