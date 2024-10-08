import Button from "./Button";
export default function FormSplitBill(){
    return <form className="form-split-bill">
        <h2>Split a bill with X</h2>
        <label>💰 Bill value</label>
        <input type="number"></input>

        <label>💁 Your expense</label>
        <input type="number"></input>

        <label>🧑‍🤝‍🧑 X's expense </label>
        <input type="number" disabled></input>

        <label>🤑 Who is paying the bill</label>
        <select>
            <option value='user'>You</option>
            <option value='friend'>YX's</option>
        </select>

        <Button>Split Bill</Button>
    </form>
}