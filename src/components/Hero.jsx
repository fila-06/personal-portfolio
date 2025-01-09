import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import fadeUp from "../utils/motion";

const Hero = () => {
  return (
    <div
      className="min-h-screen m-auto flex items-center justify-center flex-col-reverse gap-5 lg:flex-row w-full text-slate-300 bg-gradient-to-b from-primary-950 to-secondary-500  overflow-hidden p-5"
      id="hero"
    >
      <div className="flex flex-col max-w-[960px] self-center md:flex-row">
        {/* text section */}
        <motion.div
          className="flex flex-col gap-2 items-start justify-center"
          variants={fadeUp(0.5, 0.3, -100, 0)}
          whileInView="visible"
          initial="hidden"
        >
          <motion.p className="flex items-center text-start text-xl">
            Hello👋, My Name Is
          </motion.p>
          <p className="flex items-center text-start text-3xl">Filmon Abadi </p>
          <h1 className="flex text-start text-2xl text-indigo-500">
            I Am Frontend Developer & UX/UI Designer
          </h1>

          <p className="flex p-2 text-start text-slate-300">
            As a Frontend Developer and UI/UX Designer, I specialize in crafting
            scalable applications with seamless user experiences using
            JavaScript, React, and Vue.js. I also leverage tools like Figma,
            Adobe XD, and Sketch to design intuitive, visually engaging
            interfaces. My focus is on delivering high-performance,
            user-centric, and aesthetically pleasing web solutions.
          </p>
          <Button className="flex py-6 px-4 shadow-sm bg-accent-500 text-xl outline-none text-slate-200">
            get in touch
          </Button>
        </motion.div>
        {/* image section */}
        <motion.div
          className="flex flex-1 w-full h-full min-w-[400px] object-cover "
          variants={fadeUp(0.5, 0.3, 100, 0)}
          whileInView="visible"
          initial="hidden"
        >
          <div className="shadow-3xl shadow-slate-950 overflow-hidden">
            <img
              src="/about bg.jpg"
              className="w-full h-full object-cover object-center rounded-large"
              alt="bg image for hero"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
