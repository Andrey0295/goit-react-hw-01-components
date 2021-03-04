import React from 'react';

import styles from './FriendListItem.module.css';


const FriendListItem = ( {avatar, name, isOnline} ) => {
    return (
        <>

        <span className={isOnline ? styles.online : styles.offline} ></span>
        <img src={avatar} alt="this is avatar" width="48"></img>
        <p>{name}</p>

        </>


    )
 
}

export default FriendListItem;