import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import InvertBypass from "@components/InvertBypass";

const FeelingsPage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { isDarkmode, handleToggleTheme } = useContext(ThemeContext);
  return (
    <div className="bold relative flex h-full w-full select-none bg-white p-10">
      <Button
        text={isDarkmode ? "Light Mode" : "Dark Mode"}
        className="absolute right-10 top-10 z-30"
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={handleToggleTheme}
      />
      <Button
        text="Back"
        className="absolute left-10 top-10 z-30"
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={() => {
          handleTransitionTo("main");
        }}
      />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="text-2xl">
          5 stages of grief while doing a math assignment
        </div>
        <InvertBypass>
          <div className="text-xl">
            <InvertBypass>(beginning)</InvertBypass>
            😀&nbsp;
            <Arrow />
            🙂&nbsp;
            <Arrow />
            🤔&nbsp;
            <Arrow />
            😡&nbsp;
            <Arrow />
            😢&nbsp;
            <Arrow />
            😀&nbsp;
            <InvertBypass>(finished)</InvertBypass>
          </div>
        </InvertBypass>
      </div>
    </div>
  );
};

const Arrow = () => {
  return <InvertBypass>-&gt;</InvertBypass>;
};
export default FeelingsPage;
