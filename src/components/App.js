import { useState } from "react";
import FriendList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App(){
  const [friends, setFriends] = useState(initialFriends);
  return(
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends}/>
        <FormAddFriend/>
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill/>
    </div>
  )

}
