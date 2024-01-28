import { ThemeContext } from "@/App";
import { motion } from "framer-motion";
import { useContext } from "react";

const InvertBypass = ({ children }: { children?: React.ReactNode }) => {
  const { isDarkmode } = useContext(ThemeContext);
  return (
    <motion.span
      className="inline-block"
      animate={{ filter: isDarkmode ? "invert(100%)" : "invert(0%)" }}
    >
      {children}
    </motion.span>
  );
};

export default InvertBypass;
