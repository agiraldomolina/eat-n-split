import Button from "./Button";
export default function FormSplitBill({selectedFriend}){
    // console.log('from FormSplitBill: ', selectedFriend)

    return <form className="form-split-bill">
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>💰 Bill value</label>
        <input type="number"></input>

        <label>💁 Your expense</label>
        <input type="number"></input>

        <label>🧑‍🤝‍🧑 X's expense </label>
        <input type="number" disabled></input>

        <label>🤑 Who is paying the bill</label>
        <select>
            <option value='user'>You</option>
            <option value='friend'>{selectedFriend.name}'s</option>
        </select>

        <Button>Split Bill</Button>
    </form>
}