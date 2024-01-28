import { ThemeContext } from "@/App";
import { motion } from "framer-motion";
import { useContext } from "react";

const ScreenInvertFilter = ({ children }: { children?: React.ReactNode }) => {
  const { isDarkmode } = useContext(ThemeContext);
  return (
    <motion.div
      className="absolute z-50 h-[100vh] w-[100vw] rounded-full"
      animate={{ filter: isDarkmode ? "invert(100%)" : "invert(0%)" }}
    >
      {children}
    </motion.div>
  );
};

export default ScreenInvertFilter;
