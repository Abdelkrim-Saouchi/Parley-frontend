import FriendList from "./FriendList";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <SideBar />
      <Header />

      <main className="text-inter ml-[128px]">
        <FriendList />
      </main>
    </>
  );
};

export default Layout;
