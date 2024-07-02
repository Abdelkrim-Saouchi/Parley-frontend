import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";
const Header = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="text-inter flex items-center gap-20 bg-background p-4 px-4 md:ml-[128px] md:flex-row-reverse md:px-16">
      <Link to="/profile" className="hidden items-center gap-4 md:flex">
        <div className="flex flex-col text-lg">
          <p className="font-bold">Krimothiazine</p>
          <p className="self-end">Online</p>
        </div>
        <img src={profileImg} className="size-16 rounded-full border" />
      </Link>
      <button className="hidden md:block">
        <span className="icon-[hugeicons--notification-01] size-8"></span>
      </button>

      <button onClick={() => setIsOpen((prev) => !prev)}>
        <span className="icon-[mingcute--menu-line] size-12 md:hidden"></span>
      </button>
    </header>
  );
};

export default Header;
