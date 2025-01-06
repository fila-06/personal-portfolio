/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Progress = ({ scrollYProgress }) => {
  return (
    <motion.div
      animate={{
        transition: { duration: 0.5, type: "spring" },
      }}
      className="fixed bottom-2 left-0 z-[9000] w-full h-[10px] bg-blue-500 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default Progress;
