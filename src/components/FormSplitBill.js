import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({
  selectedFriend,
  setSelectedFriend,
  onSplitBill,
}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByUser : -paidByUser);
    setSelectedFriend(null);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>
        Split a bill with{" "}
        <span style={{ color: "#ff922b" }}>{selectedFriend.name}</span>
      </h2>

      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        min={0}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>🧍‍♂️ Your expense</label>
      <input
        type="number"
        value={paidByUser}
        max={String(bill)}
        min={0}
        onChange={(e) =>
          setPaidByUser(+e.target.value > bill ? bill : +e.target.value)
        }
      />

      <label>
        👬{" "}
        <span style={{ color: "#ff922b", fontWeight: "bold" }}>
          {selectedFriend.name}
        </span>
        's expense
      </label>
      <input type="text" disabled value={paidByFriend} />

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value={"user"}>You</option>
        <option value={"friend"}>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
