import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import fadeUp from "../utils/motion";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const navlist = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "About",
    id: "#about",
  },
  {
    name: "Skills",
    id: "#skills",
  },
  {
    name: "Services",
    id: "#services",
  },
  {
    name: "projects",
    id: "#projects",
  },
  {
    name: "Contact",
    id: "#contact",
  },
];

const Navbar = () => {
  const moveToView = (item) => {
    console.log(item.name, item.id);
    if (item.name !== "home") {
      try {
        document.querySelector(item.id).scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        // console.log(error)
        return;
      }
    } else {
      window.scrollTo(0, 0);
    }

    setActive(item.name);
    console.log(item.name);
  };

  const [active, setActive] = useState("home");
  const [openNav, setOpenNav] = useState(false);

  const handleToggle = () => setOpenNav((openNav) => !openNav);
  const handleOutsideClick = (event) => {
    const navControl = document.getElementById("navbar-control");
    console.log(navControl.contains(event.target));
    if (!navControl.contains(event.target)) {
      // if the clicked element is outside the navControl, close the nav
      setOpenNav(false);
    } else {
      // if the clicked element is inside the navControl, toggle
      handleToggle();
    }
  };

  const handleListLinkClick = (event, item) => {
    moveToView(item);
    setOpenNav(false);
  };

  useEffect(() => {
    const toggleNavbar = document.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", toggleNavbar);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row px-6 w-full justify-between transition duration-300 ease-in-out origin-top">
      <div className="flex flex-row space-between">
        <div className="flex w-full items-center">
          <a className="btn btn-ghost text-xl uppercase">filmon abadi</a>
        </div>
        {/* navbar control */}
        <div id="navbar-control">
          <div className="flex items-center lg:hidden">
            {openNav ? (
              <IoCloseSharp className="text-3xl cursor-pointer" />
            ) : (
              <IoMdMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <nav
        className={`${openNav ? "flex" : "hidden"} lg:flex origin-top`}
        style={{
          transition: "transform 1s ease-in-out origin-left",
        }}
      >
        <ul
          className="flex flex-col lg:flex-row w-full h-full p-2 gap-3"
          style={{
            transition: "transform 1s ease-in-out",
          }}
        >
          {navlist.map((item, index) => (
            <motion.li
              variants={fadeUp(0.5, 0.3, 100 * Math.pow(-1, index), 0)}
              whileInView="visible"
              initial="hidden"
              transition={{ duration: 0.5 }}
              key={index}
              className="text-lg px-3 py-1 border-slate-700 rounded-md shadow-slate-600 hover:text-slate-500 cursor-pointer"
              onClick={(event) => handleListLinkClick(event, item)}
            >
              <a
                className={`w-full  ${
                  active === item.name ? "active:text-slate-500" : ""
                }`}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
