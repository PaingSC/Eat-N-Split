import { Button } from "./Button";

export function Friend({ friend, selectedFriend, onSelection }) {
  // const isSelected = selectedFriend.id === friend.id;
  // const isSelected = true;
  const isSelected = selectedFriend?.id === friend.id;

  function handleFriendSelection() {
    onSelection(friend);
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      {/* // <li> */}
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={handleFriendSelection}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
