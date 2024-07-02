import FriendList from "../components/FriendList";
import ConversationHistory from "../components/ConversationHistory";
import { Outlet } from "react-router-dom";
const HistoryPage = () => {
  return (
    <main className="text-inter min-h-dvh bg-background text-primary md:ml-[128px]">
      <FriendList />
      <div className="relative flex">
        <ConversationHistory />
        <Outlet />
      </div>
    </main>
  );
};

export default HistoryPage;
