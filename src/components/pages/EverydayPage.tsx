import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import React, { createContext, useContext, useState } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { motion } from "framer-motion";
import Card from "@components/Card";
import { CircleFormula, IconDark, IconLight } from "@images/imageExport";

export const MomentumContext = createContext<any>(null);
const EverydayPage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { isDarkmode, handleToggleTheme } = useContext(ThemeContext);
  const [hasMomentum, setHasMomentum] = useState(true);
  return (
    <div className="bold relative flex h-full w-full select-none bg-white p-10">
      <Button
        text={isDarkmode ? "Light Mode" : "Dark Mode"}
        className="absolute right-10 top-10 z-[998]"
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={handleToggleTheme}
      />
      <Button
        text="Back"
        className="absolute left-10 top-10 z-[998]"
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={() => {
          handleTransitionTo("main");
        }}
      />
      <Button
        text={hasMomentum ? "toggle Momentum: On" : "toggle Momentum: Off"}
        className="absolute bottom-10 left-10 z-[998]"
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={() => {
          setHasMomentum(!hasMomentum);
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

          <MomentumContext.Provider value={{ hasMomentum, setHasMomentum }}>
            <DragableCard>
              <img src={IconDark} className="w-[100px]" />
            </DragableCard>
            <DragableCard>
              <img src={IconLight} className="w-[100px]" />
            </DragableCard>
            <DragableCard>
              <div className="flex aspect-square w-[144px] flex-col items-center justify-center rounded-full bg-white outline">
                <img src={CircleFormula} className="w-[120px]" />
                <p>random circle</p>
              </div>
            </DragableCard>
            <DragableCard>
              <Card
                className="bg-white text-xl"
                text="Morning 9:30AM"
                description="I may have awaken to the clock, but I now go back sleep"
              />
            </DragableCard>
            <DragableCard>
              <Card
                className="bg-white text-xl"
                text="Cooking B)"
                description="Measuring ingredients like a scientist (Food)"
              />
            </DragableCard>
            <DragableCard>
              <Card
                className="bg-white text-xl"
                text="Finances"
                description="Budgeting my spending on my hobbies"
              />
            </DragableCard>
            <DragableCard>
              <Card
                className="bg-white text-xl"
                text="Shopping"
                description="deviously calculating item price per unit"
              />
            </DragableCard>
            <DragableCard>:3c</DragableCard>
            <DragableCard>
              <div className="bold min-h-[200px] w-[400px] rounded-lg border-4 border-black bg-white p-6 text-[1.2rem]">
                1am+
                <pre>∩――――――――∩</pre>
                <pre>|| ∧ ﾍ　||</pre>
                <pre>|| (* ´ ｰ`) ZZzz</pre>
                <pre>|ﾉ^⌒⌒づ`￣ ＼</pre>
                <pre>(　ノ　　⌒ ヽ ＼</pre>
                <pre>＼　　||￣￣￣￣￣||</pre>
                <pre>　 ＼,ﾉ||</pre>
                <p className="text-sm text-DarkGray">
                  sorry i do not math at night －ω－
                </p>
              </div>
            </DragableCard>
            <DragableCard></DragableCard>
            <DragableCard></DragableCard>
          </MomentumContext.Provider>
        </div>
      </div>
    </div>
  );
};

const DragableCard = React.memo(
  ({ children }: { children?: React.ReactNode }) => {
    const [CardWidth] = useState(1);
    const [CardHeight] = useState(1);
    const { hasMomentum } = useContext(MomentumContext);
    const [RandomiseZ] = useState(Math.floor(Math.random() * 40 + 10));
    const [screenX] = useState(window.innerWidth);
    const [screenY] = useState(window.innerHeight);
    const [initialX] = useState(((Math.random() - 0.5) * screenX) / 1.2);
    const [initialY] = useState(((Math.random() - 0.5) * screenY) / 1.6);
    const [RandomRotate] = useState(() => {
      const degreeVariant = 10;
      const constantOffset = 5;
      const posOrNegOne = 1 - Math.floor(Math.random() * 2) * 2;
      const calc =
        (Math.random() * degreeVariant + constantOffset) * posOrNegOne;
      return calc;
    });
    const { mouseX, mouseY } = useMousePos();

    return (
      <div>
        <motion.div
          className="absolute cursor-pointer"
          style={{
            minWidth: CardWidth,
            minHeight: CardHeight,
            zIndex: RandomiseZ,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ x: initialX, y: initialY, rotate: RandomRotate }}
          whileDrag={{ rotate: 0, zIndex: 90 }}
          dragConstraints={{
            top: -screenY / 2.5,
            right: screenX / 2.5,
            bottom: screenY / 2.5,
            left: -screenX / 2.5,
          }}
          dragMomentum={hasMomentum}
          drag
        >
          <div
            className="pointer-events-auto select-none"
            style={parallax(mouseX, mouseY, 0.001 * RandomiseZ)}
          >
            <div className="absolute z-10 h-full w-full" />
            {children}
          </div>
        </motion.div>
      </div>
    );
  },
);

export default EverydayPage;
