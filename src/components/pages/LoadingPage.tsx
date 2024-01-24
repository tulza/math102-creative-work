import useMousePos from "@/hooks/useMousePos";
import { IconLight } from "@/images/imageExport";
import { easeInOut, motion } from "framer-motion";

const LoadingPage = () => {
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

  return (
    <motion.div
      className="bold flex h-full w-full select-none flex-col justify-center bg-white p-10 text-black"
      animate={{ opacity: 1 }}
      transition={{ delay: 3.5 }}
    >
      <div
        id="header content"
        className="absolute right-0 top-0 text-3xl"
        style={parallax(0.075)}
      >
        :)
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
          id="Loading Bar"
          className="mr-[8rem] aspect-square h-[16rem] rounded-full"
          style={parallax(0.02)}
        >
          <svg
            id="Loading circle"
            className="[transform:rotateY(180deg)]" //flip the loading on y axis
            viewBox="25 25 50 50"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="black"
              strokeWidth={4}
              strokeDashoffset={Math.PI * 20 * -2}
              strokeDasharray={Math.PI * 20 * 2}
              animate={{ strokeDashoffset: 0 }}
              transition={{ delay: 1, duration: 2, ease: easeInOut }}
            />
          </svg>
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
          <p className="text-3xl">TJIT528</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
