import { TransitionContext } from "@/App";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";

const MainLinkButton = ({
  color,
  text,
  goto,
}: {
  color: string;
  text: string;
  goto: string;
}) => {
  const { handleTransitionTo } = useContext(TransitionContext);
  return (
    <motion.div
      className={clsx("cursor-pointer rounded-lg text-white", `${color}`)}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      <motion.div
        whileHover="hover"
        className="h-full w-full p-4"
        onClick={() => {
          handleTransitionTo(goto);
        }}
      >
        <motion.p
          variants={{ hover: { marginLeft: 25, marginRight: 25 } }}
          animate={{}}
        >
          {text}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default MainLinkButton;
