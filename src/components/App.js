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
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // console.log("From App:")
  // console.log(selectedFriend)

  function handleShowAddFriend(){
    setShowAddFriend((show)=>!show);
  }

  function handleAddNewFriend(newFriend){
    setFriends((friends)=>[...friends, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend){
    setSelectedFriend((selected)=>(
      selected?.id === friend.id ?
      null : friend)
    )
    setShowAddFriend(false)
  }

  function handleSplitBill(value){
    console.log(value)
    setFriends((friends)=>
      friends.map((friend)=>
        friend.id ===selectedFriend.id 
        ? {...friend, balance: friend.balance + value  }
        : friend
      )
    );
    
    setSelectedFriend(null);
    
  }

  return(
    <div className="app">
      <div className="sidebar">
        <FriendList 
          friends={friends} 
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {
          showAddFriend && 
          <FormAddFriend 
            onAddNewFriend={handleAddNewFriend}          
          />
        }
        
        <Button onClick={handleShowAddFriend}
        >
          {showAddFriend 
            ? "Close" 
            : "Add Friend"  
          }
        </Button>
      </div>
      {
        selectedFriend && 
        <FormSplitBill  
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      }
    </div>
  )

}
