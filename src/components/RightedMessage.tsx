const RightedMessage = ({
  imgSrc,
  message,
  timeStamp,
}: {
  imgSrc: string;
  message: string;
  timeStamp: string;
}) => {
  return (
    <div className="flex gap-8">
      <div className="flex grow flex-col text-xl">
        <p className="mb-2 min-h-[120px] rounded-l-full rounded-br-full bg-accent p-6 text-end text-background">
          {message}
        </p>
        <p className="self-end text-sm text-secondary">Sent {timeStamp}</p>
      </div>
      <img src={imgSrc} className="size-11 rounded-full md:size-20" />
    </div>
  );
};
export default RightedMessage;
