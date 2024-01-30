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
    setSelectedFriend(null);
  }

  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleFriendSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curFrined) =>
      curFrined?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleFriendSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
