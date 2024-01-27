import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { motion } from "framer-motion";

const HomePage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { isDarkmode, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div className="bold flex h-full w-full select-none bg-white p-10 text-black">
      <Button
        text={isDarkmode ? "Light Mode" : "Dark Mode"}
        className="absolute right-10 top-10 "
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={handleToggleTheme}
      />
      <Button
        text="Back"
        className="absolute left-10 top-10 "
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={() => {
          handleTransitionTo("start");
        }}
      />
      {/* Text */}
      <div className="flex h-full w-full flex-col items-center justify-center ">
        <div
          className="whitespace-nowrap text-2xl"
          style={parallax(mouseX, mouseY, 0.05)}
        >
          How does mathematics affect me?
        </div>
        <motion.div
          className="flex items-center overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: 75 }}
          transition={{ delay: 1, staggerChildren: 0.25 }}
        >
          <motion.div className="bg-Red mr-2 cursor-pointer rounded-lg  p-4 text-white">
            My Life
          </motion.div>
          <motion.div className="bg-Yellow mr-2 cursor-pointer rounded-lg  p-4 text-white">
            My Hobbies
          </motion.div>
          <motion.div className="bg-Green mr-2 cursor-pointer rounded-lg  p-4 text-white">
            My Eduction
          </motion.div>
          <motion.div className="bg-Blue mr-2 cursor-pointer rounded-lg  p-4 text-white">
            My Everyday
          </motion.div>
          <motion.div className="bg-Purple mr-2 cursor-pointer rounded-lg  p-4 text-white">
            My Feelings
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// const CursorTrack = ({
//   mouseX,
//   mouseY,
// }: {
//   mouseX: number | null;
//   mouseY: number | null;
// }) => {
//   const [Linelength, setlength] = useState(0);
//   const [heightOffset, setHeightOffset] = useState(
//     Number(window.innerHeight / 2),
//   );
//   const [widthOffset, setWidthOffset] = useState(Number(window.innerWidth / 2));

//   useEffect(() => {
//     addEventListener("win")
//   });
//   useEffect(() => {
//     if (!mouseX || !mouseY) return;
//     setlength(
//       Math.sqrt((mouseX - widthOffset) ** 2 + (mouseY - heightOffset) ** 2),
//     );
//   }, [mouseX, mouseY]);
//   return (
//     <div
//       className="z-90 absolute h-0.5 w-[200px] bg-black "
//       style={{ width: Linelength }}
//     ></div>
//   );
// };

export default HomePage;
