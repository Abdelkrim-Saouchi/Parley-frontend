const LeftedMessage = ({
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
      <img src={imgSrc} className="size-11 rounded-full md:size-20" />
      <div className="grow text-xl">
        <p className="mb-2 min-h-[120px] rounded-r-full rounded-bl-full bg-accent p-6 text-background">
          {message}
        </p>
        <p className="text-sm text-secondary">Sent {timeStamp}</p>
      </div>
    </div>
  );
};
export default LeftedMessage;
