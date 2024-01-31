import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import Card from "@components/Card";
import { motion, motionValue, useMotionValue } from "framer-motion";
import clsx from "clsx";

const EverydayPage = () => {
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
      <div className="mt-20 flex w-full items-center justify-center">
        <div className="flex h-full w-[1000px] items-center justify-center">
          <code
            className="absolute bottom-20 z-[51] rounded-lg bg-black px-10 py-4 text-[1.5rem] font-bold text-white"
            style={parallax(mouseX, mouseY, 0.05)}
          >
            Drag these cards around
          </code>
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
        </div>
      </div>
    </div>
  );
};

const DragableCard = React.memo(
  ({ children }: { children?: React.ReactNode }) => {
    const CardWidth = 500;
    const CardHeight = 250;
    const RandomRotate = (Math.random() - 0.5) * 50;
    const RandomiseZ = Math.floor(Math.random() * 40 + 10);
    const screenX = window.innerWidth;
    const screenY = window.innerHeight;
    const initialX = ((Math.random() - 0.5) * screenX) / 1;
    const initialY = ((Math.random() - 0.5) * screenY) / 1.2;

    const ParallaxWrapper = ({
      z,
      children,
    }: {
      z: number;
      children: React.ReactNode;
    }) => {
      const { mouseX, mouseY } = useMousePos();
      return (
        <div
          className="h-full w-full bg-white outline"
          style={parallax(mouseX, mouseY, 0.001 * z)}
        >
          {children}
        </div>
      );
    };
    return (
      <div>
        <motion.div
          className="absolute cursor-pointer "
          style={{
            width: CardWidth,
            height: CardHeight,
            rotate: RandomRotate,
            zIndex: RandomiseZ,
            translateX: "-50%",
          }}
          animate={{ x: initialX, y: initialY }}
          whileDrag={{ rotate: 0, zIndex: 90 }}
          dragElastic={0.2}
          dragConstraints={{
            top: -screenY / 3,
            right: screenX / 3,
            bottom: screenY / 3,
            left: -screenX / 3,
          }}
          drag
        >
          <ParallaxWrapper z={RandomiseZ}>{children}</ParallaxWrapper>
        </motion.div>
      </div>
    );
  },
);

export default EverydayPage;
