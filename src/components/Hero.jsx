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
          <p className="flex items-center text-start text-3xl">
            Filmon Abadi          </p>
          <h1 className="flex text-start text-2xl text-indigo-500">
            I Am Frontend Developer
          </h1>
          {/* <p className="flex p-2 text-start text-slate-300">
            As a full-stack web developer with a passion for React and Django, I
            thrive on bringing dynamic and efficient web solutions to life. With
            React, I craft interactive user interfaces that engage and delight
            users, leveraging its component-based architecture to create
            seamless experiences and Django empowered robust backend systems.
          </p> */}
          <p className="flex p-2 text-start text-slate-300">
            As a Frontend Developer, I excel in using Javascript and React to create scalable applications with seamless user experiences. I also leverage Vue.js for flexible front-end solutions and Node.js with TypeScript for efficient, maintainable back-end systems. My focus is on delivering high-performance, user-centric, and scalable web solutions.

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
