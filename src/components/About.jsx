import fadeUp from "../utils/motion";
import Separator from "./Separator";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="m-auto flex flex-col bg-gradient-to-b from-primary-800 to-secondary-900 text-primary-300 gap-4"
      id="about"
    >
      <Separator text="about " />
      <div className="flex self-center flex-col max-w-[960px] items-center">
        <div className="flex flex-col pb-6">
          <motion.h1
            variants={fadeUp(0.5, 0.2, "100%", 0)}
            whileInView="visible"
            initial="hidden"
            className="flex flex-col gap-2 text-3xl text-center items-center justify-center"
          >
            <span className="text-blue-200 uppercase italic font-bold">
              I am not just Coder. but also I am Programmer.
            </span>
          </motion.h1>
          <motion.h2
            variants={fadeUp(0.5, 0.2, "-100%", 0)}
            whileInView="visible"
            initial="hidden"
            className="text-center p-4 text-lg text-slate-500 italic"
          >
            "A coder can write code to make a computer do something. A
            programmer can write code to make a human do something."
          </motion.h2>
        </div>

        {/* image and text container */}
        <div className="flex gap-10 p-4 flex-col lg:flex-row">
          {/* paragraph */}
          <motion.div
            whileInView="visible"
            initial="hidden"
            className="flex flex-col  rounded-lg shadow-md shadow-slate-800"
          >
            <h1 className="text-3xl w-full text-center p-2">head one</h1>
            <motion.p
              variants={fadeUp(0.5, 0, "-100%", 0)}
              className="w-full text-start px-5 py-3"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus nulla ad mollitia quam magnam earum, numquam voluptate
              delectus tempora voluptatum tempore. Ducimus eum itaque at sed.
              Hic velit adipisci nostrum?
            </motion.p>

            <motion.p
              variants={fadeUp(0.5, 0, "100%", 0)}
              className="w-full text-start px-5 py-3"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus nulla ad mollitia quam magnam earum, numquam voluptate
              delectus tempora voluptatum tempore. Ducimus eum itaque at sed.
              Hic velit adipisci nostrum?
            </motion.p>

            <motion.p
              variants={fadeUp(0.5, 0, "-100%", 0)}
              className="w-full text-start px-5 py-3"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus nulla ad mollitia quam magnam earum, numquam voluptate
              delectus tempora voluptatum tempore. Ducimus eum itaque at sed.
              Hic velit adipisci nostrum?
            </motion.p>
          </motion.div>
          {/* central image */}
          <motion.div
            variants={fadeUp(0.5, 0.2, "100%", 0)}
            whileInView="visible"
            initial="hidden"
            className="flex items-stretch justify-center"
          >
            <div className="block overflow-hidden shadow-md shadow-slate-800 rounded-full">
              <img
                src="/meles.jpg"
                alt="my image"
                className="max-w-[500px] h-full object-cover aspect-square object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
