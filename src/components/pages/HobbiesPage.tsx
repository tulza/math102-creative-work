import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { useScreenSize } from "@/hooks/useScreenSize";

const HobbiesPage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { isDarkmode, handleToggleTheme } = useContext(ThemeContext);
  const { screenX, screenY } = useScreenSize();

  const handleWidth = () => {
    const a = mouseX - screenX / 2;
    const b = mouseY - screenY / 2;
    const c = Math.sqrt(a ** 2 + b ** 2);

    return c;
  };
  const getX = () => {
    return mouseX - screenX / 2;
  };
  const getY = () => {
    return mouseY - screenY / 2;
  };
  const calcAngleDegrees = () => {
    return (Math.atan2(getY(), getX()) * 180) / Math.PI;
  };
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

      <div
        className="absolute left-[50%] top-[50%] z-10  h-2 w-2 whitespace-nowrap  rounded-full bg-black"
        style={{ rotate: `${calcAngleDegrees()}deg` }}
      >
        <div
          className="my-1 h-[1px] rounded-full bg-black"
          style={{ width: handleWidth() }}
        ></div>
      </div>
    </div>
  );
};

export default HobbiesPage;
