import { Link } from "react-router-dom";
import FriendComp from "./FriendComp";
import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import f2 from "../assets/craig-mckay-jmURdhtm7Ng-unsplash.jpg";
import f3 from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import f4 from "../assets/ali-jouyandeh-bodgc6H44FA-unsplash.jpg";
import f5 from "../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import f6 from "../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import f7 from "../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";

const FriendList = () => {
  const friends = [
    {
      url: "#",
      src: f1,
      online: true,
    },
    {
      url: "#",
      src: f2,
      online: true,
    },
    {
      url: "#",
      src: f3,
      online: true,
    },
    {
      url: "#",
      src: f4,
    },
    {
      url: "#",
      src: f5,
    },
    {
      url: "#",
      src: f6,
    },
    {
      url: "#",
      src: f7,
    },
    {
      url: "#",
      src: f3,
      online: true,
    },
    {
      url: "#",
      src: f5,
    },
    {
      url: "#",
      src: f7,
    },
    {
      url: "#",
      src: f1,
      online: true,
    },
    {
      url: "#",
      src: f5,
    },
    {
      url: "#",
      src: f1,
      online: true,
    },
    {
      url: "#",
      src: f2,
      online: true,
    },
    {
      url: "#",
      src: f3,
      online: true,
    },
    {
      url: "#",
      src: f4,
    },
    {
      url: "#",
      src: f5,
    },
    {
      url: "#",
      src: f6,
    },
    {
      url: "#",
      src: f7,
    },
    {
      url: "#",
      src: f5,
    },
    {
      url: "#",
      src: f7,
    },
    {
      url: "#",
      src: f1,
      online: true,
    },
    {
      url: "#",
      src: f5,
    },
    {
      url: "#",
      src: f1,
      online: true,
    },
    {
      url: "#",
      src: f1,
      online: true,
    },
    {
      url: "#",
      src: f5,
    },
    {
      url: "#",
      src: f1,
      online: true,
    },
  ];
  return (
    <div className="bg-primary px-16 py-2">
      <h2 className="mb-2 text-2xl font-bold text-background">Friends</h2>
      <div className="flex items-center gap-4">
        <div className="scrollbar scrollbar-track scrollbar-thumb flex items-center gap-4 overflow-x-auto rounded-[120px] p-1 py-4 md:overflow-hidden md:hover:overflow-x-auto">
          {friends.map((friend, index) => (
            <FriendComp
              key={index}
              url={friend.url}
              src={friend.src}
              online={friend.online}
            />
          ))}
        </div>
        <Link
          to="#"
          className="ml-4 text-nowrap text-lg font-semibold text-accent-lighten"
        >
          See All
        </Link>
      </div>
    </div>
  );
};
export default FriendList;
