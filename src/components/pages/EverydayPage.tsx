import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { motion, motionValue, useMotionValue } from "framer-motion";

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
          <DragableCard >
            <div className="h-[200px] w-[400px] rounded-lg border-4 border-black p-6">
            <p className="bold mb-4 text-xl">wa</p>
            <p>wa</p>
          </div>
      </DragableCard >
          <DragableCard >kek</DragableCard >
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard />
          <DragableCard >
            <div className="h-[200px] w-[400px] rounded-lg border-4 border-black p-6">
            <p className="bold mb-4 text-xl">wa</p>
            <p>wa2</p>
          </div>
      </DragableCard >
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
    const CardWidth = 100;
    const CardHeight = 100;
    const RandomRotate = (Math.random() - 0.5) * 50;
    const RandomiseZ = Math.floor(Math.random() * 40 + 10);
    const screenX = window.innerWidth;
    const screenY = window.innerHeight;
    const initialX = ((Math.random() - 0.5) * screenX) / 1;
    const initialY = ((Math.random() - 0.5) * screenY) / 1.2;
    console.log("wa");
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
            minWidth: CardWidth,
            minHeight: CardHeight,
            
            zIndex: RandomiseZ,
            translateX: "-50%",
          }}
          initial={{ x: initialX, y: initialY,rotate: RandomRotate, }}
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
