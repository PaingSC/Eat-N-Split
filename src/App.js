import { useState } from "react";
import { FormAddFriend } from "./components/FormAddFriend";
import { Button } from "./components/Button";
import { FormSplitBill } from "./components/FormSplitBill";
import { FriendList } from "./components/FriendList";
import { initialFriends } from "./components/initialFriends";

export default function App() {
  // const friends = initialFriends;
  const [friends, setFriends] = useState([...initialFriends]);
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
