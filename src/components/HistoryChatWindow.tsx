import profile from "../assets/profile.jpg";
import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import ChatFriendBar from "./ChatFriendBar";
import MessagingTool from "./MessagingTool";
import Messages from "./Messages";

const HistoryChatWindow = () => {
  const messages = [
    {
      imgSrc: f1,
      message: "Hello, how are you?",
      timeStamp: "20:24",
      isUser: false,
    },
    {
      imgSrc: profile,
      message: "I am fine and you?",
      timeStamp: "20:26",
      isUser: true,
    },
    {
      imgSrc: f1,
      message: "Feel good. are you free tonight?",
      timeStamp: "20:28",
      isUser: false,
    },
    {
      imgSrc: profile,
      message: "Yes I am",
      timeStamp: "20:30",
      isUser: true,
    },
  ];

  return (
    <div className="absolute inset-0 z-30 flex-1 border-l border-secondary bg-background xl:relative">
      <ChatFriendBar />
      <div className="bg-background px-4 py-6 md:pl-8 md:pr-16">
        <Messages messages={messages} />
        <MessagingTool />
      </div>
    </div>
  );
};

export default HistoryChatWindow;
