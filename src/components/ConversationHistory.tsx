import ContactHistoryComp from "./ContactHistoryComp";
import f1 from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import f2 from "../assets/craig-mckay-jmURdhtm7Ng-unsplash.jpg";
import f3 from "../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import f4 from "../assets/ali-jouyandeh-bodgc6H44FA-unsplash.jpg";
import f5 from "../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";

const ConversationHistory = () => {
  const contacts = [
    {
      imgSrc: f1,
      fullName: "Abdelkrim Saouchi",
      timeStamp: "1 day",
      message: "I feel good. are you free tonight?",
    },
    {
      imgSrc: f2,
      fullName: "Saouchi Mohammed",
      timeStamp: "2 days",
      message: "Hi! how are you?",
    },
    {
      imgSrc: f3,
      fullName: "Saouchi Abderrazak",
      timeStamp: "3 hours",
      message: "Take care of yourself",
    },
    {
      imgSrc: f4,
      fullName: "Fares Rouabah",
      timeStamp: "5 minutes",
      message: "Are you not comming?",
    },
    {
      imgSrc: f5,
      fullName: "Khentach Bachar",
      timeStamp: "1 week",
      message: "Hi Doctor!",
    },
  ];
  return (
    <div className="flex-1 px-16 py-4 text-2xl font-bold">
      <h2>Conversation History</h2>
      <div className="flex flex-col py-4"></div>
      {contacts.map((contact, index) => (
        <ContactHistoryComp
          key={index}
          imgSrc={contact.imgSrc}
          fullName={contact.fullName}
          timeStamp={contact.timeStamp}
          message={contact.message}
        />
      ))}
    </div>
  );
};
export default ConversationHistory;
