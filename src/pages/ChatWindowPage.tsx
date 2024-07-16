import ChatFriendBar from "../components/ChatFriendBar";
import Messages from "../components/Messages";
import MessagingTool from "../components/MessagingTool";
import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import profile from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

const ChatWindowPage = () => {
  const navigate = useNavigate();
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
    <main className="text-inter min-h-dvh bg-background px-4 py-2 text-lg text-primary md:ml-[120px] lg:ml-[120px] lg:pl-16 lg:pr-8">
      <button onClick={() => navigate(-1)} className="hidden md:block">
        <span className="icon-[material-symbols--arrow-left-alt] size-8 md:size-12"></span>
      </button>

      <div className="flex flex-col md:flex-col md:gap-4 lg:flex-row">
        <div className="lg:w-3/5">
          <ChatFriendBar isHistoryChat={false} />
          <div className="bg-background px-4 py-6 md:pl-8 md:pr-16">
            <Messages messages={messages} />
            <MessagingTool />
          </div>
        </div>
        <div className="ml-8 hidden md:block lg:ml-0 lg:w-2/5">
          <h3 className="flex items-center gap-4 text-2xl font-bold">
            <span className="icon-[icon-park-solid--setting] block size-7 md:size-8"></span>
            Settings
          </h3>
          <div className="ml-4 mt-4 flex flex-col items-start gap-4">
            <button className="flex items-center gap-2 hover:text-accent">
              <span className="icon-[material-symbols--delete-outline]"></span>
              Delete conversation
            </button>
            <button className="flex items-center gap-2 hover:text-accent">
              <span className="icon-[uiw--user-delete]"></span>
              Delete as friend
            </button>
            <button className="flex items-center gap-2 hover:text-accent">
              <span className="icon-[mingcute--user-add-line]"></span>
              Add as friend
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatWindowPage;
