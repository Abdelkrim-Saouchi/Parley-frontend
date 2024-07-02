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
      to="/history/1"
      className="flex items-center gap-6 rounded-xl p-4 text-lg hover:bg-secondary/10"
    >
      <img
        src={imgSrc}
        className="size-16 rounded-full object-cover object-center md:size-28"
      />
      <div className="grow space-y-6">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <h3 className="text-lg font-bold">{fullName}</h3>
          <p className="text-sm text-secondary/85">{timeStamp}</p>
        </div>
        <p className="hidden text-sm text-secondary/85 md:block">{message}</p>
      </div>
    </NavLink>
  );
};

export default ContactHistoryComp;
