import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import PictureAndInfo from "../components/PictureAndInfo";

const arrowVariants = {
  open: {
    rotate: 0,
  },
  close: {
    rotate: 90,
  },
};

const passwordVariants = {
  open: {
    display: "flex",
  },
  close: {
    display: "none",
  },
};

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowControls = useAnimationControls();
  const passwordControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      arrowControls.start("open");
      passwordControls.start("open");
    } else {
      arrowControls.start("close");
      passwordControls.start("close");
    }
  }, [arrowControls, passwordControls, isOpen]);

  return (
    <main className="text-inter min-h-dvh bg-background px-4 py-2 text-lg text-primary md:ml-[128px] md:pl-24 md:pr-16">
      <form className="flex w-fit flex-col gap-16 px-4">
        <PictureAndInfo />

        <div className="space-y-4">
          <h3 className="font-bold">Personal informations</h3>
          <div className="flex flex-wrap items-center gap-16">
            <div className="flex grow flex-col gap-1 xl:min-w-96">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                className="border border-secondary bg-transparent p-4 outline-accent"
              />
            </div>
            <div className="flex grow flex-col gap-1 xl:min-w-96">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                className="border border-secondary bg-transparent p-4 outline-accent"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-3 font-bold">
            Change password{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen((prev) => !prev);
              }}
            >
              <motion.span
                initial="close"
                variants={arrowVariants}
                animate={arrowControls}
                className="icon-[bxs--down-arrow]"
              ></motion.span>
            </button>
          </h3>
          <motion.div
            initial="close"
            variants={passwordVariants}
            animate={passwordControls}
            className="flex flex-wrap items-center gap-16"
          >
            <div className="flex grow flex-col gap-1 xl:min-w-96">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                className="border border-secondary bg-transparent p-4 outline-accent"
              />
            </div>
            <div className="flex grow flex-col gap-1 xl:min-w-96">
              <label htmlFor="confirmation">Confirmation</label>
              <input
                type="password"
                id="confirmation"
                className="border border-secondary bg-transparent p-4 outline-accent"
              />
            </div>
          </motion.div>
        </div>
        <button className="mb-6 self-center rounded-full bg-accent px-8 py-4 font-bold text-background md:px-32 md:py-4">
          Save Changes
        </button>
      </form>
    </main>
  );
};

export default Profile;
