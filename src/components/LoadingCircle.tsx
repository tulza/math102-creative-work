import { easeInOut, motion } from "framer-motion";
const LoadingCircle = () => {
  return (
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
  );
};

export default LoadingCircle;
