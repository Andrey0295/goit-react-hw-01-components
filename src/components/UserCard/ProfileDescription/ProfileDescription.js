import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProfileDescription.module.css';

const ProfileDescription = ({ name, tag, avatar, location }) => {
  return (
    <div className={styles.descriptionBlock}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
        width="280"
      />
      <p className="name">{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
};

ProfileDescription.defaultProps = {
  location: 'location not specified',
};

export default ProfileDescription;
