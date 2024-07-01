import LeftedMessage from "./LeftedMessage";
import RightedMessage from "./RightedMessage";
import profile from "../assets/profile.jpg";
import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import { useNavigate } from "react-router-dom";
const HistoryChatWindow = () => {
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
    <div className="absolute inset-0 z-30 flex-1 border-l border-secondary bg-background xl:relative">
      <div className="flex items-center justify-between border-b border-secondary py-6 pl-8 pr-16">
        <button onClick={() => navigate(-1)} className="xl:hidden">
          <span className="icon-[material-symbols--arrow-left-alt] size-12"></span>
        </button>

        <div className="flex items-center gap-8 text-2xl">
          <img src={f1} className="size-20 rounded-full" />
          <div>
            <h3 className="font-bold">Saouchi Abdelkrim</h3>
            <p className="text-lg text-secondary/85">active 2h</p>
          </div>
        </div>
        <span className="icon-[icon-park-solid--setting] block size-8"></span>
      </div>
      <div className="py-6 pl-8 pr-16">
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

        <div className="mt-4 flex items-center gap-4 text-lg">
          <div className="flex grow items-center gap-4 rounded-full border-2 border-secondary p-2">
            <button>
              <span className="icon-[iconoir--emoji] size-12"></span>
            </button>
            <input
              type="text"
              placeholder="Message"
              className="grow bg-transparent outline-none"
            />
          </div>
          <button>
            <span className="icon-[bx--image-add] size-12"></span>
          </button>
          <button>
            <span className="icon-[majesticons--send] size-12 text-accent"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryChatWindow;
