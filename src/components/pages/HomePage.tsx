import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import { motion } from "framer-motion";
import clsx from "clsx";
import MainLinkButton from "../MainLinkButton";

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
