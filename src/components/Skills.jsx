import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
/* eslint-disable react/prop-types */
import { IoLogoHtml5 } from "react-icons/io";
import Separator from "./Separator";
import { IconContext } from "react-icons";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
} from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import {
  SiDjango,
  SiExpress,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextui,
} from "react-icons/si";
import { TbBrandCoinbase } from "react-icons/tb";
import { FaBootstrap, FaGit, FaGithub } from "react-icons/fa";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import fadeUp from "../utils/motion";

const skillContainerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

function LargeIconProvider({ children }) {
  return (
    <IconContext.Provider value={{ size: "50px" }}>
      <div>{children}</div>
    </IconContext.Provider>
  );
}

const skill = [
  {
    name: "HTML",
    id: 1,
    icon: <IoLogoHtml5 color="#E34F26" />,
  },
  {
    name: "CSS",
    id: 2,
    icon: <IoLogoCss3 color="#2965F1" />,
  },
  {
    name: "JavaScript",
    id: 3,
    icon: <IoLogoJavascript color="#F0DB4F" />,
  },
  {
    name: "React",
    id: 4,
    icon: <IoLogoReact color="#61DBFB" />,
  },
  // { name: "bootstrap", id: 17, icon: <FaBootstrap color="#7952B3" /> },

  {
    name: "Git",
    id: 18,
    icon: <FaGit color="#333" />,
  },
  {
    name: "github",
    id: 12,
    icon: <FaGithub color="#333" />,
  },

  {
    name: "Figma",
    id: 16,
    icon: <FaFigma />,
  },
  {
    name: "Adobe Xd",
    id: 16,
    icon: <SiAdobexd />,
  },
  {
    name: "Photoshop",
    id: 16,
    icon: <SiAdobephotoshop />,
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controlls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start", "end start"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  useEffect(() => {
    if (inView) {
      controlls.start("visible");
      console.log("inView");
    } else {
      controlls.start("hidden");
    }
    console.log("inview................................: ", inView);
  }, [inView, controlls]);

  return (
    <div
      ref={ref}
      className=" sm:m-auto flex flex-col py-10  bg-gradient-to-b from-primary-950 via-accent-500 to-secondary-500 gap-2"
      id="skills"
    >
      <div className="flex flex-col max-w-[960px] self-center">
        {/* description about the skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.div
            className="flex w-full"
            variants={fadeUp(0.5, 0.2, -100, 0)}
          >
            <Separator text="Skills." />
          </motion.div>
          <motion.h2
            variants={fadeUp(0.5, 0.2, 100, 0)}
            className="text-start text-3xl text-primary-300 pb-5"
          >
            Here are some of the technologies I have been working with.
          </motion.h2>
        </motion.div>
        {/* skill container */}
        <LargeIconProvider>
          <motion.div
            //   ref={}
            variants={skillContainerVariants}
            style={{ scaleX: scaleX }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-primary-900 rounded-lg shadow-2xl"
          >
            {/* skill card */}
            {skill.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center justify-center gap-3 p-5 rounded-lg bg-primary-950 shadow-2xl text-primary-50"
              >
                <div className="">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </LargeIconProvider>
      </div>
    </div>
  );
};

export default Skills;
