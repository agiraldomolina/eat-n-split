import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({selectedFriend}){
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const paidByFriend =bill ? bill - paidByUser : "";
        

    return <form className="form-split-bill">
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>💰 Bill value</label>
        <input type="text" onChange={(e)=>setBill(Number(e.target.value))}/>

        <label>💁 Your expense</label>
        <input 
            type="text" 
            onChange={(e)=>
                setPaidByUser(
                    Number(e.target.value) > bill ? paidByUser:
                    Number(e.target.value)
                )
            }
        />

        <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense </label>
        <input type="number" disabled value={paidByFriend}/>

        <label>🤑 Who is paying the bill</label>
        <select
            value={whoIsPaying}
            onChange={(e)=>setWhoIsPaying(e.target.value)}
        >
            <option value='user'>You</option>
            <option value='friend'>{selectedFriend.name}'s</option>
        </select>

        <Button>Split Bill</Button>
    </form>
}