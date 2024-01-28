import { motion } from "framer-motion";

type ScrollingTextProps = {
  text: string;
  init: number;
};

const ScrollingText = ({ text, init }: ScrollingTextProps) => {
  const calc = String(init + 110) + "%";
  return (
    <motion.div
      className="absolute top-0 bg-white px-4 text-xl text-[rgb(183,185,189)]"
      initial={{ left: `${init}%` }}
      animate={{ left: calc }}
      transition={{
        duration: 160,
        repeat: Infinity,
      }}
    >
      {text}
    </motion.div>
  );
};

export default ScrollingText;
