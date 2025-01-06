import { motion, useScroll } from "framer-motion";
import { Navbar, Progress } from "./";

const Header = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.header
      className=" m-auto flex flex-col sticky top-0 left-0 w-full p-3 z-40 bg-primary-900 shadow-sm shadow-primary-800 items-center"
      style={{ backgroundColor: "/projects/booking.PNG" }}
      id="header"
    >
      {/* progress bar */}
      <Progress scrollYProgress={scrollYProgress} />
      <Navbar />
    </motion.header>
  );
};

export default Header;
