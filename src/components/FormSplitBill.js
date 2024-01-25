import { Button } from "./Button";

export function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>
        Split a bill with{" "}
        <span style={{ color: "#ff922b" }}>{selectedFriend.name}</span>
      </h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♂️ Your expense</label>
      <input type="text" />

      <label>
        👬{" "}
        <span style={{ color: "#ff922b", fontWeight: "bold" }}>
          {selectedFriend.name}
        </span>
        's expense
      </label>
      <input type="text" disabled />

      <label>Who is paying the bill</label>
      <select value={"user"}>
        <option value={"user"}>You</option>
        <option value={"friend"}>X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
