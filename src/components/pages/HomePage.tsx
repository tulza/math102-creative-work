import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import React, { Children, useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { motion } from "framer-motion";
import clsx from "clsx";
import MainLinkButton from "../MainLinkButton";
import ScrollingText from "../ScrollingText";

const HomePage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { isDarkmode, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div className="bold relative flex h-full w-full select-none bg-white p-10 text-black">
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
          handleTransitionTo("start");
        }}
      />
      <BackgroundEffect />
      {/* Text */}
      <div className="z-20 flex h-full w-full flex-col items-center justify-center">
        <div
          className="whitespace-nowrap rounded-lg bg-[#ffffff99] text-2xl"
          style={parallax(mouseX, mouseY, 0.05)}
        >
          How does mathematics affect me?
        </div>
        <motion.div
          className={clsx(
            "flex items-center overflow-hidden ",
            isDarkmode && "invert",
          )}
          style={parallax(mouseX, mouseY, 0.025)}
          initial={{ height: 0 }}
          animate={{ height: 75 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="flex gap-4"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.25, delayChildren: 2 }}
          >
            <MainLinkButton color="bg-Red" text="My Life" goto="start" />
            <MainLinkButton color="bg-Yellow" text="My Hobbies" goto="start" />
            <MainLinkButton color="bg-Green" text="My Eduction" goto="start" />
            <MainLinkButton color="bg-Blue" text="My Everyday" goto="start" />
            <MainLinkButton color="bg-Purple" text="My Feelings" goto="start" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const BackgroundEffect = React.memo(() => {
  const firstLevelRandom = () => {
    return Math.random() * 110 - 10;
  };
  const secondLevelRandom = () => {
    return Math.random() * 110 - 10;
  };
  const thirdLevelRandom = () => {
    return Math.random() * 50 - 50;
  };
  const getRandomFromArray = () => {
    return itemList[Math.floor(Math.random() * itemList.length)];
  };
  const itemList = [
    "measurements",
    "video games",
    "groceries",
    "programming",
    "budgeting",
    "cooking",
    "designing",
    "planning",
  ];
  return (
    <motion.div
      className="absolute left-0 top-[-16%] grid h-[110vh] w-[150vw]"
      initial={{ rotate: -5, opacity: 0 }}
      animate={{ rotate: [3, -3, 3], opacity: 1 }}
      transition={{
        opacity: { duration: 10 },
        rotate: { repeat: Infinity, duration: 15, ease: "easeInOut" },
      }}
    >
      {[null, null, null, null, null, null].map(() => {
        return (
          <ScrollTextContainer>
            <ScrollingText
              text={getRandomFromArray()}
              init={firstLevelRandom()}
            />
            <ScrollingText
              text={getRandomFromArray()}
              init={secondLevelRandom()}
            />
            <ScrollingText
              text={getRandomFromArray()}
              init={thirdLevelRandom()}
            />
          </ScrollTextContainer>
        );
      })}
    </motion.div>
  );
});

const ScrollTextContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <hr className="mt-4" />
      {children}
    </div>
  );
};

export default HomePage;
