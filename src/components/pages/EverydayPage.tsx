import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { motion } from "framer-motion";

const EverydayPage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { isDarkmode, handleToggleTheme } = useContext(ThemeContext);
  console.log("wa");
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

          <DragableCard></DragableCard>
          <DragableCard>
            <div>asdasjkdh</div>
          </DragableCard>
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
    const [CardWidth] = useState(100);
    const [CardHeight] = useState(100);
    const [RandomRotate] = useState((Math.random() - 0.5) * 50);
    const [RandomiseZ] = useState(Math.floor(Math.random() * 40 + 10));
    const [screenX] = useState(window.innerWidth);
    const [screenY] = useState(window.innerHeight);
    const [initialX] = useState(((Math.random() - 0.5) * screenX) / 1);
    const [initialY] = useState(((Math.random() - 0.5) * screenY) / 1.2);

    return (
      <div>
        <motion.div
          className="absolute cursor-pointer outline"
          style={{
            width: CardWidth,
            height: CardHeight,
            zIndex: RandomiseZ,
            translateX: "-50%",
          }}
          initial={{ x: initialX, y: initialY, rotate: RandomRotate }}
          whileDrag={{ rotate: 0, zIndex: 90 }}
          dragConstraints={{
            top: -screenY / 3,
            right: screenX / 2.5,
            bottom: screenY / 3,
            left: -screenX / 2.5,
          }}
          drag
        >
          <div className="absolute select-none" key="wa">
            {children}
          </div>
        </motion.div>
      </div>
    );
  },
);

export default EverydayPage;
