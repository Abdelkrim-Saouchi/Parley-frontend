import LeftedMessage from "./LeftedMessage";
import RightedMessage from "./RightedMessage";

type Message = {
  imgSrc: string;
  message: string;
  timeStamp: string;
  isUser: boolean;
};

const Messages = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((message, index) => {
        if (message.isUser) {
          return (
            <RightedMessage
              key={index}
              imgSrc={message.imgSrc}
              message={message.message}
              timeStamp={message.timeStamp}
            />
          );
        } else {
          return (
            <LeftedMessage
              key={index}
              imgSrc={message.imgSrc}
              message={message.message}
              timeStamp={message.timeStamp}
            />
          );
        }
      })}
    </div>
  );
};

export default Messages;
