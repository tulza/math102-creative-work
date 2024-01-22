import clsx from "clsx";
import { color, motion } from "framer-motion";
import React from "react";

type ButtonProps = {
  className?: string;
  image?: string;
  text?: string;
  OnClick: any;
};

const variant = {
  hovered: {
    opacity: 1,
  },
};

const Button = ({ className, image, text, OnClick }: ButtonProps) => {
  const opacity = 0.2;
  return (
    <motion.div
      className={clsx(
        "m-6 flex h-12 cursor-pointer select-none place-items-center gap-2 overflow-hidden rounded-md bg-element p-1 px-3 font-bold antialiased",
        `${className}`,
      )}
      whileHover="hovered"
      whileTap={{ scale: 0.95 }}
      onClick={OnClick}
    >
      {!!image && (
        <motion.img
          src={image}
          variants={variant}
          className="h-full"
          style={{ opacity }}
        />
      )}
      {!!text && (
        <motion.code variants={variant} style={{ opacity }}>
          {text}
        </motion.code>
      )}
    </motion.div>
  );
};

export default Button;
