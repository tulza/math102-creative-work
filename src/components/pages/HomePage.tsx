import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import React, { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { motion } from "framer-motion";
import clsx from "clsx";
import MainLinkButton from "../MainLinkButton";
import ScrollingText from "../ScrollingText";
import InvertBypass from "../invertBypass";

const HomePage = () => {
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
        <InvertBypass>
          <motion.div
            className="flex items-center overflow-hidden "
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
              <MainLinkButton color="bg-Red" text="My Life" goto="life" />
              <MainLinkButton
                color="bg-Yellow"
                text="My Hobbies"
                goto="hobbies"
              />
              <MainLinkButton
                color="bg-Green"
                text="My Eduction"
                goto="education"
              />
              <MainLinkButton
                color="bg-Blue"
                text="My Everyday"
                goto="everyday"
              />
              <MainLinkButton
                color="bg-Purple"
                text="My Feelings"
                goto="feelings"
              />
            </motion.div>
          </motion.div>
        </InvertBypass>
      </div>
    </div>
  );
};

const BackgroundEffect = React.memo(() => {
  const firstLevelRandom = () => {
    return Math.random() * 100 + 10;
  };
  const secondLevelRandom = () => {
    return Math.random() * 100 - 20;
  };
  const thirdLevelRandom = () => {
    return Math.random() * 75 - 75;
  };
  const forthLevelRandom = () => {
    return Math.random() * 75 - 100;
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
    "calculating",
    "counting",
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
      {[null, null, null, null, null, null].map((a, i) => {
        return (
          <ScrollTextContainer key={i}>
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
            <ScrollingText
              text={getRandomFromArray()}
              init={forthLevelRandom()}
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
      <hr className="border-Gray mt-4" />
      {children}
    </div>
  );
};

export default HomePage;
