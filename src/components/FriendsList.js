import Friend from "./Friend"

export default function FriendList({ friends, selectedFriend, onSelectedFriend  }) {
    // console.log('From FriendList: ', selectedFriend  )

    return <ul>
        {friends.map((friend)=>
           <Friend
                friend={friend}
                onSelectedFriend={onSelectedFriend}
                selectedFriend={selectedFriend}
                key={friend.id}
           /> 
        )}
    </ul>
}