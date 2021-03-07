import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img src={avatar} alt="this is avatar" width="48"></img>
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

FriendListItem.defaultProps = {
  name: 'Name not specified',
};

export default FriendListItem;
