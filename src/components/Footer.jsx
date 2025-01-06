import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";
import fadeUp from "../utils/motion";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-900/50 text-primary-50" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="grid grid-cols-12 gap-8 py-14 lg:grid-cols-8">
          <div className="mb-0 col-span-full lg:col-span-3 ">
            <a href="/" className="flex justify-center lg:justify-start">
              <span className="text-3xl font-bold text-primary-300">
                Gc Family
              </span>
            </a>
            <p className="py-8 text-primary-400 lg:max-w-xs text-center lg:text-left">
              I am here to help you.
              <br />
            </p>
            <motion.div
              whileInView="visible"
              initial="hidden"
              className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 "
            >
              <motion.a
                variants={fadeUp(0.7, 0.5, 0, 50)}
                href="https://www.linkedin.com/analytics/profile-views/"
                target="_blank"
              >
                <FaLinkedin
                  className="w-8 h-8 rounded-full text-blue-600"
                  color=""
                />
              </motion.a>
              <motion.a variants={fadeUp(0.7, 0.2, 0, -50)} href="">
                <FaFacebook className="w-8 h-8 rounded-full text-blue-700" />
              </motion.a>
              <motion.a
                variants={fadeUp(0.7, 0.2, 0, 50)}
                href="https://t.me/timeChangeEverythingChange"
              >
                <FaTelegram className="w-8 h-8 rounded-full text-green-700" />
              </motion.a>
              <motion.a
                variants={fadeUp(0.7, 0.2, 0, -50)}
                href="https://www.upwork.com/freelancers/~01780b102e24c04ea7?viewMode=1"
                target="_blank"
              >
                <SiUpwork className="w-8 h-8 rounded-full text-green-800" />
              </motion.a>
              <motion.a variants={fadeUp(0.7, 0.2, 0, 50)} href="">
                <FaYoutube className="w-8 h-8 rounded-full text-red-700" />
              </motion.a>
            </motion.div>
          </div>
          {/*End Col*/}
          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
            <motion.button
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  translation: {
                    type: "spring",
                    duration: 0.5,
                    bounce: 5,
                    damping: 6,
                    delay: 0.2,
                  },
                },
                hidden: { opacity: 0, y: -100 },
              }}
              whileInView="visible"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              initial="hidden"
              className="flex text-lg text-primary-100 font-medium mb-7 p-3 rounded-3xl bg-accent-600 hover:bg-accent-500 hover:text-primary-950"
            >
              Get In Touch
            </motion.button>
            <ul className="text-primary-300  transition-all duration-500">
              <li className="mb-6 text-primary-500">
                <a href="mailto:meleshaileselassie05@gmail.com">
                  meleshaileselassie05@gmail.com
                </a>
              </li>
              <li className="mb-6">+251 984 348 348</li>
              <li>Adiss Abeba, Ethiopia.</li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:order-last sm:col-span-4 md:col-span-4 lg:order-none lg:col-span-1">
            <h4 className="text-lg text-primary-300 font-medium mb-7">
              Navigations
            </h4>
            <ul className="text-primary-300 transition-all duration-500  ">
              <li className="p-2">
                <a href="#" className="text-primary-300 hover:text-green-500">
                  Home
                </a>
              </li>
              <li className="p-2">
                <a href="#" className=" text-primary-300 hover:text-green-500">
                  About
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#skills"
                  className=" text-primary-300 hover:text-green-500"
                >
                  Skills
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#services"
                  className=" text-primary-300 hover:text-green-500"
                >
                  Services
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#projects"
                  className=" text-primary-300 hover:text-green-500"
                >
                  projects
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#contact"
                  className=" text-primary-300 hover:text-green-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
            <h4 className="text-lg text-center text-gray-900 font-medium mb-7 lg:text-left">
              Newsletter
            </h4>
            <div className="flex flex-col items-center lg:items-start">
              <input
                type="text"
                className="w-full h-12 border border-gray-300 rounded-full py-2.5 px-5 shadow-sm text-gray-800 mb-5 text-center lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                placeholder="Your email here.."
              />
              <button
                type="submit"
                className="h-11 py-3 px-6 bg-accent-600 transition-all duration-500 shadow-md rounded-full text-sm text-white font-semibold w-fit hover:bg-accent-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/*Grid*/}
        <div className="py-7 border-t border-primary-700">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 ">
              ©<a href="#">GC-Family</a> 2024, All rights reserved.
            </span>
            <ul className="flex items-center gap-9 mt-4 lg:mt-0">
              <li>
                <a href="#" className="text-sm text-gray-500">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
