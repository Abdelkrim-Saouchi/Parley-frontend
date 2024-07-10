import { useNavigate } from "react-router-dom";
import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
const ChatFriendBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between border-b border-secondary px-4 py-6 md:pl-8 md:pr-16">
      <button onClick={() => navigate(-1)} className="xl:hidden">
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
      <span className="icon-[icon-park-solid--setting] block size-7 md:size-8"></span>
    </div>
  );
};

export default ChatFriendBar;
