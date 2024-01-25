import clsx from "clsx";
import { motion } from "framer-motion";

type ButtonProps = {
  className?: string;
  text?: string;
  onClick: any;
  style?: object;
};

const Button = ({ className, text, onClick, style }: ButtonProps) => {
  return (
    <motion.div
      className={clsx(
        "mr-2 cursor-pointer rounded-lg border-2 border-black bg-white p-4",
        `${className}`,
      )}
      style={style}
      whileHover="hover"
      animate={{ background: "#fff", color: "#000", opacity: 1 }}
      variants={{
        hover: { background: "#000", color: "#fff" },
      }}
      onClick={onClick}
    >
      {text}
    </motion.div>
  );
};

export default Button;
