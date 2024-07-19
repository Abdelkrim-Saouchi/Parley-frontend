import { useNavigate } from "react-router-dom";
import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const settingVariants = {
  open: {
    display: "block",
    scaleY: 1,
    transformOrigin: "top",
  },
  close: {
    display: "none",
    scaleY: 0,
    transformOrigin: "top",
  },
};

const ChatFriendBar = ({ isHistoryChat }: { isHistoryChat: boolean }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const settingMenuControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      settingMenuControls.start("open");
    } else {
      settingMenuControls.start("close");
    }
  }, [settingMenuControls, isOpen]);

  return (
    <div
      className={
        isHistoryChat
          ? "relative flex items-center justify-between border-b border-secondary px-4 py-6 md:pl-8 md:pr-16"
          : "relative flex items-center justify-between border-b border-secondary px-4 py-6 md:border-none md:pl-8 md:pr-16"
      }
    >
      <button
        onClick={() => navigate(-1)}
        className={isHistoryChat ? "xl:hidden" : "md:hidden"}
      >
        <span className="icon-[material-symbols--arrow-left-alt] size-8 md:size-12"></span>
      </button>

      <div className="flex items-center gap-8 text-2xl">
        <img src={f1} className="hidden size-20 rounded-full md:block" />
        <div className="text-center md:text-start">
          <h3 className="text-xl font-bold md:text-inherit">
            Saouchi Abdelkrim
          </h3>
          <p className="text-lg text-secondary/85">active 2h</p>
        </div>
      </div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={isHistoryChat ? "block" : "block md:hidden"}
      >
        <span
          className={
            isHistoryChat
              ? "icon-[icon-park-solid--setting] size-7 md:size-8"
              : "icon-[icon-park-solid--setting] size-7 md:hidden md:size-8"
          }
        ></span>
      </button>

      <motion.div
        initial="close"
        variants={settingVariants}
        animate={settingMenuControls}
        className="absolute -bottom-28 right-10 space-y-4 border border-secondary bg-background p-4 md:hidden"
      >
        <button className="flex items-center gap-2 hover:text-accent">
          <span className="icon-[material-symbols--delete-outline]"></span>
          Delete conversation
        </button>
        <button className="flex items-center gap-2 hover:text-accent">
          <span className="icon-[uiw--user-delete]"></span>
          Delete as friend
        </button>
        <button className="flex items-center gap-2 hover:text-accent">
          <span className="icon-[mingcute--user-add-line]"></span>
          Add as friend
        </button>
      </motion.div>
    </div>
  );
};

export default ChatFriendBar;
