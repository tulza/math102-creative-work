import { motion } from "framer-motion";

type ScrollingTextProps = {
  text: string;
  init: number;
};

const ScrollingText = ({ text, init }: ScrollingTextProps) => {
  const calc = String(init + 110) + "%";
  return (
    <motion.div
      className="text-Gray absolute top-0 bg-white px-4 text-xl"
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
