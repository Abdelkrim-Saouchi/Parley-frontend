import { Link } from "react-router-dom";

const FriendComp = ({
  url,
  src,
  online,
}: {
  url: string;
  src: string;
  online: boolean | undefined;
}) => {
  return (
    <Link
      to={url}
      className="relative min-w-12 rounded-full border-2 border-background"
    >
      {online && (
        <span className="absolute right-0 top-9 block size-3 rounded-full border bg-green-600"></span>
      )}
      <img src={src} className="size-12 rounded-full object-cover" />
    </Link>
  );
};

export default FriendComp;
