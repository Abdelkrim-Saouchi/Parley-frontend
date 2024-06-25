import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";
const Header = () => {
  return (
    <header className="text-inter ml-[128px] flex flex-row-reverse items-center gap-20 bg-background p-4 px-16">
      <Link to="#" className="flex items-center gap-4">
        <div className="flex flex-col text-lg">
          <p className="font-bold">Krimothiazine</p>
          <p className="self-end">Online</p>
        </div>
        <img src={profileImg} className="size-16 rounded-full border" />
      </Link>
      <button>
        <span className="icon-[hugeicons--notification-01] size-8"></span>
      </button>
    </header>
  );
};

export default Header;
