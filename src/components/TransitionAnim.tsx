import { TransitionContext } from "@/App";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TransitionAnim = () => {
  const navigate = useNavigate();
  const { handleFinishTransition } = useContext(TransitionContext);
  const transitionDuration = 2;
  useEffect(() => {
    setTimeout(() => navigate("main"), (transitionDuration * 1000) / 2);
    setTimeout(handleFinishTransition, transitionDuration * 1000);
  });
  return (
    <motion.div
      className="absolute z-50 h-[100vh] w-[100vw] bg-black"
      animate={{ x: ["120%", "0%", "0%", "120%"] }}
      transition={{ duration: transitionDuration }}
    />
  );
};

export default TransitionAnim;
