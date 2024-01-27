import { motion } from "framer-motion";

type ScrollingTextProps = {
  text: string;
  init: number;
};

const ScrollingText = ({ text, init }: ScrollingTextProps) => {
  const calc = String(init + 100) + "%";
  return (
    <motion.div
      className="absolute top-0 bg-white px-4 text-xl text-[rgb(229,231,235)]"
      initial={{ left: `${init}%` }}
      animate={{ left: calc }}
      transition={{ duration: 180 }}
    >
      {text}
    </motion.div>
  );
};

export default ScrollingText;
