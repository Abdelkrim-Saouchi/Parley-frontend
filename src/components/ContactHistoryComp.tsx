import { NavLink } from "react-router-dom";

type ContactHistoryCompProps = {
  imgSrc: string;
  fullName: string;
  timeStamp: string;
  message: string;
};

const ContactHistoryComp = ({
  imgSrc,
  fullName,
  timeStamp,
  message,
}: ContactHistoryCompProps) => {
  return (
    <NavLink
      to="/1"
      className="flex items-center gap-6 rounded-xl p-4 text-lg hover:bg-secondary/10"
    >
      <img
        src={imgSrc}
        className="size-28 rounded-full object-cover object-center"
      />
      <div className="grow space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{fullName}</h3>
          <p className="text-sm text-secondary/85">{timeStamp}</p>
        </div>
        <p className="text-sm text-secondary/85">{message}</p>
      </div>
    </NavLink>
  );
};

export default ContactHistoryComp;
