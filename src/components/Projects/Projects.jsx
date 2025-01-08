import { motion } from "framer-motion";
import Separator from "../Separator";
import projects from "./_data";
import { Button } from "@nextui-org/react";
import { GrLinkNext } from "react-icons/gr";

const projectVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const Projects = () => {
  return (
    <motion.section
      className="m-auto flex flex-col gap-y-20 pb-36 bg-gradient-to-br from-accent-500 via-primary-950 to-secondary-500"
      id="projects"
    >
      <Separator text="projects" />
      <div className="flex max-w-[960px] self-center">
        <div className="grid gap-8 lg:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  origin-center">
          {/* project */}

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-start bg-primary-900 rounded-lg shadow-md shadow-primary-800 origin-top border border-primary-700
                        "
            >
              <motion.div
                variants={projectVariants}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  damping: 10,
                  delay: 0.2,
                  duration: 0.85,
                }}
                initial="hidden"
                whileInView="visible"
                className="flex overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full overflow-hidden rounded-md shadow-sm shadow-primary-400"
                />
              </motion.div>
              <motion.div
                variants={projectVariants}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  damping: 10,
                  duration: 0.5,
                }}
                initial="hidden"
                whileInView="visible"
                className="sticky bottom-0 flex flex-col min-h-[300px] bg-primary-800 shadow-2xl shadow-primary-950 cursor-pointer hover:bg-primary-200 hover:text-primary-950
                            "
              >
                <h2
                  className="flex items-center justify-center text-xl w-full px-3  text-center py-5"
                  style={{ transition: "all 0.5s ease" }}
                >
                  {project.title}
                </h2>
                <p className="px-2 text-center">
                 {project.description}
                </p>

                <div className="flex justify-center items-center pt-10">
                  <Button
                    className="text-primary-50 bg-secondary-600"
                    variant="solid"
                    endContent={<GrLinkNext color="white" />}
                    style={{ transition: "all 0.5s ease" }}
                  >
                    Show Detail
                  </Button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
