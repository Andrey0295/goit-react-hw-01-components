import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';



const FriendList = ( {friends} ) => {
    return (
        <ul>
            {friends.map((friend) => (
                <li key={friend.id} >
                    <FriendListItem
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}/>

                </li>
            ))}


        </ul>
    )
}



export default FriendList;