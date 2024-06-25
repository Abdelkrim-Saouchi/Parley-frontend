import HistoryChatWindow from "../components/HistoryChatWindow";
import FriendList from "../components/FriendList";
import ConversationHistory from "../components/ConversationHistory";
const HistoryPage = () => {
  return (
    <main className="text-inter ml-[128px] bg-background text-primary">
      <FriendList />
      <div className="flex">
        <ConversationHistory />
        <HistoryChatWindow />
      </div>
    </main>
  );
};

export default HistoryPage;
