import { Link, NavLink } from "react-router-dom";
import parleyLogo from "../assets/parley-round.svg";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimationControls } from "framer-motion";

const menuVariants = {
  open: {
    translateX: "0%",
    transition: {
      duration: 0.3,
    },
  },
  close: {
    translateX: "-100%",
    transition: {
      duration: 0.3,
    },
  },
};

const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      menuControls.start("open");
    } else {
      menuControls.start("close");
    }
  }, [isOpen, menuControls]);

  return (
    <motion.div
      variants={menuVariants}
      animate={menuControls}
      initial="close"
      className="fixed top-0 z-20 flex min-h-dvh w-[300px] flex-col bg-primary text-background shadow-2xl shadow-black md:hidden"
    >
      <Link
        to="/"
        className="flex items-center gap-4 border-b border-background p-8"
      >
        <img src={parleyLogo} className="size-10" />
        <h1 className="text-3xl font-bold">Parley</h1>
      </Link>

      <nav className="flex flex-col gap-16 p-8">
        <button className="flex" onClick={() => setIsOpen((prev) => !prev)}>
          <span className="icon-[mingcute--arrow-right-fill] size-8 min-w-8 rotate-180"></span>
        </button>
        <NavLink to="#" className="flex items-center gap-4 text-lg font-bold">
          <span className="icon-[hugeicons--notification-01] size-8"></span>
          <p>Notifications</p>
        </NavLink>
        <NavLink
          to="/profiles/:id"
          className={({ isActive, isPending }) =>
            isActive || isPending
              ? "flex items-center gap-4 text-lg font-bold text-accent"
              : "flex items-center gap-4 text-lg font-bold"
          }
        >
          <span className="icon-[iconamoon--profile-circle-fill] size-8"></span>
          <p>Profile</p>
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive, isPending }) =>
            isActive || isPending
              ? "flex items-center gap-4 text-lg font-bold text-accent"
              : "flex items-center gap-4 text-lg font-bold"
          }
        >
          <span className="icon-[ic--twotone-history] size-8"></span>
          <p>History</p>
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive, isPending }) =>
            isActive || isPending
              ? "flex items-center gap-4 text-lg font-bold text-accent"
              : "flex items-center gap-4 text-lg font-bold"
          }
        >
          <span className="icon-[material-symbols--person-search-outline-rounded] size-8"></span>
          <p>Search</p>
        </NavLink>
      </nav>
      <button className="mx-8 mb-8 mt-auto flex items-center gap-4 overflow-hidden text-lg font-bold">
        <span className="icon-[lucide--log-out] size-8"></span>
        <p>Log out</p>
      </button>
    </motion.div>
  );
};

export default MobileMenu;
