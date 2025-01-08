import { motion } from "framer-motion";
import fadeUp from "../utils/motion";
import Separator from "./Separator";

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
            
            &rdquo; A coder can write code to make a computer do something. A
            programmer can write code to make a human do something. &rdquo;
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
            <h1 className="text-3xl w-full text-center p-2 text-white italic font-bold underline"> My name is Filmon Abadi</h1>
            <motion.p
              variants={fadeUp(0.5, 0, "-100%", 0)}
              className="w-full text-start px-5 py-3"
            >
              I am a Computer Science student with
              a passion for creating exceptional digital experiences. As a
              frontend developer, I specialize in building responsive and
              interactive web interfaces that prioritize usability and
              performance. I enjoy bringing ideas to life through clean,
              efficient code and modern technologies.{" "}
            </motion.p>

            <motion.p
              variants={fadeUp(0.5, 0, "100%", 0)}
              className="w-full text-start px-5 py-3"
            >
              In addition to frontend development, I am skilled in UX/UI design,
              where I focus on crafting user-centered designs that enhance
              engagement and ensure seamless navigation. I strive to create
              intuitive and aesthetically pleasing interfaces that align with
              the needs and goals of users.
            </motion.p>

            <motion.p
              variants={fadeUp(0.5, 0, "-100%", 0)}
              className="w-full text-start px-5 py-3"
            >
              I also have a strong interest in graphics design, blending
              creativity with technical expertise to produce impactful visuals.
              From logos to web assets, I enjoy designing elements that
              complement and elevate digital projects. I am always eager to
              learn and grow, refining my skills to deliver high-quality
              solutions.
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
                src="/filmon.jpg"
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
