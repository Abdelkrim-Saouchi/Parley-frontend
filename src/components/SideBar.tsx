import { Link, NavLink } from "react-router-dom";
import parleyLogo from "../assets/parley-round.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimationControls } from "framer-motion";

const menuVariants = {
  open: {
    width: "300px",
    transition: {
      duration: 0.3,
    },
  },
  close: {
    width: "128px",
    transition: {
      duration: 0.3,
    },
  },
};

const arrowVariants = {
  open: {
    rotate: 180,
  },
  close: {
    rotate: 360,
  },
};
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuControls = useAnimationControls();
  const arrowControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      menuControls.start("open");
      arrowControls.start("open");
    } else {
      menuControls.start("close");
      arrowControls.start("close");
    }
  }, [isOpen, menuControls, arrowControls]);

  return (
    <motion.div
      variants={menuVariants}
      animate={menuControls}
      initial="close"
      className="absolute z-20 flex min-h-dvh w-[128px] flex-col bg-primary p-8 text-background shadow-2xl shadow-black"
    >
      <Link to="/" className="flex items-center gap-4">
        <img src={parleyLogo} className="size-16" />
        <h1 className="overflow-hidden text-5xl font-bold">Parley</h1>
      </Link>
      <nav className="mt-16 flex flex-col gap-16">
        <button className="flex" onClick={() => setIsOpen((prev) => !prev)}>
          {/* <span className="icon-[mingcute--arrow-right-fill] size-12"></span> */}
          <motion.span
            variants={arrowVariants}
            animate={arrowControls}
            initial="open"
            className="icon-[mingcute--arrow-right-fill] size-12 min-w-12"
          ></motion.span>
        </button>
        <NavLink to="#" className="flex items-center gap-4 text-lg font-bold">
          <span className="icon-[iconamoon--profile-circle-fill] size-12 min-w-12"></span>
          <p className="overflow-hidden">Profile</p>
        </NavLink>
        <NavLink to="#" className="flex items-center gap-4 text-lg font-bold">
          <span className="icon-[ic--twotone-history] size-12 min-w-12"></span>
          <p className="overflow-hidden">History</p>
        </NavLink>
        <NavLink to="#" className="flex items-center gap-4 text-lg font-bold">
          <span className="icon-[material-symbols--person-search-outline-rounded] size-12 min-w-12"></span>
          <p className="overflow-hidden">Search</p>
        </NavLink>
      </nav>
      <button className="mt-auto flex items-center gap-4 overflow-hidden text-lg font-bold">
        <span className="icon-[lucide--log-out] size-12 min-w-12"></span>
        <p className="overflow-hidden text-nowrap">Log out</p>
      </button>
    </motion.div>
  );
};

export default SideBar;
