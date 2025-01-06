import Separator from "../Separator";
import { motion } from "framer-motion";
import fadeUp from "../../utils/motion";
import services from "./_data";

const Services = () => {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      id="services"
      className="flex  flex-col bg-gradient-to-b from-primary-800 to-secondary-700"
    >
      <Separator text="services" />
      <div className="flex flex-row max-w-[960px] self-center">
        {/* services */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 items-baseline">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp(0.5, 0.3, 0, 100)}
              whileInView="visible"
              initial="hidden"
              className="flex flex-col items-center text-start px-2 py-4 aspect-video gap-2 bg-primary-900 rounded-lg shadow-2xl"
            >
              <div className="flex justify-center">
                <img src={service.image} alt={service.name} />
              </div>
              <h1 className="text-xl">{service.name}</h1>
              <p className="p-5 pt-0">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
