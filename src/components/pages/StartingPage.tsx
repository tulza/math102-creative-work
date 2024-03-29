import useMousePos from "@/hooks/useMousePos";
import { IconLight } from "@/images/imageExport";
import LoadingCircle from "@components/LoadingCircle";
import DisclaimerText from "@components/disclaimerText";
import Button from "@components/Button";
import { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import { motion } from "framer-motion";

const StartingPage = () => {
  const { mouseX, mouseY } = useMousePos();
  const parallax = (effectStrength: number) => {
    if (mouseX == null || mouseY == null) {
      return;
    }
    return {
      transform: `translate(${
        (mouseX - window.innerWidth / 2) * effectStrength
      }px, ${(mouseY - window.innerHeight / 2) * effectStrength}px)`,
    };
  };
  const { handleTransitionTo } = useContext(TransitionContext);
  const { handleToggleTheme, isDarkmode } = useContext(ThemeContext);
  return (
    <div className="bold flex h-full w-full select-none flex-col justify-center bg-white p-10 text-black">
      <div
        id="header content"
        className="absolute right-0 top-0 z-20 text-3xl"
        style={parallax(0.075)}
      >
        :)
      </div>
      <Button
        text={isDarkmode ? "Light Mode" : "Dark Mode"}
        className="absolute right-10 top-10 "
        style={parallax(0.01)}
        onClick={handleToggleTheme}
      />
      <div
        id="recommendations text"
        className="text-l absolute top-10 flex flex-col justify-self-center leading-3"
        style={parallax(0.005)}
      >
        <DisclaimerText text="for best experience" />
        <DisclaimerText text="use full screen and in 1080p" />
      </div>
      <div id="Body container" className="flex items-center justify-between">
        <div
          id="Text highlight"
          className="text-[6rem] uppercase leading-[5rem]"
          style={parallax(0.01)}
        >
          <div
            className="textStroke absolute text-transparent"
            style={parallax(0.015)}
          >
            <p className="">Math 102</p>
            <p className="">Creative Work</p>
          </div>
          <p className="">Math 102</p>
          <p className="">Creative Work</p>
        </div>
        <div
          id="Loading circle"
          className="mr-[8rem] aspect-square h-[16rem] rounded-full"
          style={parallax(0.02)}
        >
          <LoadingCircle />
        </div>
      </div>
      <div
        id="footer loader"
        className="absolute bottom-0 mb-10 flex h-[125px] w-full gap-4 pr-20"
        style={parallax(0.015)}
      >
        <img src={IconLight}></img>
        <div className="flex w-full flex-col justify-evenly">
          <div className="h-1 w-full bg-black" />
          <div className="flex items-center justify-between">
            <div>
              <p className="relative whitespace-nowrap text-3xl">BY: TJIT528</p>
              <p
                className="textStroke absolute bottom-5 whitespace-nowrap  text-3xl text-transparent"
                style={parallax(0.005)}
              >
                BY: TJIT528
              </p>
            </div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 3 }}
            >
              <Button
                className="px-40 text-xl"
                style={parallax(0.005)}
                onClick={() => {
                  handleTransitionTo("main");
                }}
                text="Continue"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
