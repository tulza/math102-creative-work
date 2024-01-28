import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { useScreenSize } from "@/hooks/useScreenSize";
import { motion } from "framer-motion";
import InvertBypass from "../invertBypass";
import { CursorTrackCode, ParallaxCode } from "@/images/imageExport";

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
  const calcAngleDegrees = () => {
    return (Math.atan2(getY(), getX()) * 180) / Math.PI;
  };
  const getX = () => {
    return mouseX - screenX / 2;
  };
  const getY = () => {
    return mouseY - screenY / 2;
  };
  return (
    <div className="bold relative flex h-full w-full select-none justify-center bg-white p-10">
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

      <CursorTrack
        calcAngleDegrees={calcAngleDegrees}
        handleWidth={handleWidth}
      />

      <div className="relative flex w-[1200px] items-center">
        <motion.div
          whileHover="hover"
          className="absolute left-0  flex flex-col"
          style={parallax(mouseX, mouseY, 0.01)}
        >
          <div className="z-10 w-max cursor-pointer rounded-lg bg-white p-2 px-6 text-3xl outline">
            Web development
          </div>
          <motion.div className="w-[600px] overflow-hidden pt-4">
            <motion.div
              className="h-0 rounded-lg border-0 border-black"
              variants={{ hover: { height: 600, borderWidth: 0 } }}
            >
              <div className="light h-full w-full p-4">
                <p className="mb-2">
                  T: <InvertBypass>👋</InvertBypass> Many of the components I've
                  made on this website likely have had some math included in
                  some form, from the parallax effect
                </p>
                <InvertBypass>
                  <div className="flex w-full">
                    <img src={ParallaxCode} />
                  </div>
                </InvertBypass>
                <p className="flex justify-end">
                  to the cursor track over here --&gt;
                </p>
                <InvertBypass>
                  <div className="flex w-full px-[50px]">
                    <img src={CursorTrackCode} />
                  </div>
                </InvertBypass>
                <p>
                  so it can be said that{" "}
                  <span className="bold mb-2">
                    Math has a pretty significant impacts here,
                  </span>
                </p>
                <p>
                  and am thankful that it had allowing me to create the
                  aesthetics of the web that i have envisioned.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/*  */}
        <motion.div
          whileHover="hover"
          className="absolute right-0 flex flex-col items-end"
          style={parallax(mouseX, mouseY, 0.01)}
        >
          <div className="z-10 w-max cursor-pointer rounded-lg bg-white p-2 px-6 text-3xl outline">
            Cooking
          </div>
          <motion.div className="w-[400px] overflow-hidden pt-4">
            <motion.div
              className="h-0 rounded-lg border-0 border-black"
              variants={{ hover: { height: 200, borderWidth: 0 } }}
            >
              <div className="light h-full w-full p-4">
                <ol style={{ listStyleType: "-moz-initial" }}>
                  <li>I want to cook yummy food and drinks</li>
                  <li>I follow a recipe</li>
                  <li>follow the measurement</li>
                  <li>follow steps and cooking time</li>
                  <li>food comes out great thanks to numbers</li>
                </ol>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const CursorTrack = ({
  calcAngleDegrees,
  handleWidth,
}: {
  calcAngleDegrees: any;
  handleWidth: any;
}) => {
  return (
    <div
      className="absolute left-[50%] top-[50%] z-10  h-2 w-2 whitespace-nowrap  rounded-full bg-black"
      style={{ rotate: `${calcAngleDegrees()}deg` }}
    >
      <div
        className="my-1 h-[1px] rounded-full bg-black"
        style={{ width: handleWidth() }}
      ></div>
    </div>
  );
};

export default HobbiesPage;
