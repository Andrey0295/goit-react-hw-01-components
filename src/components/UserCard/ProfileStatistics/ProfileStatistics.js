import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProfileStatistics.module.css';

const ProfileStatistics = ({ followers, views, likes }) => {
  return (
    <ul className={styles.statisticsBlock}>
      <li>
        <span className="label">Followers: </span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views: </span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes: </span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
};

ProfileStatistics.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

ProfileStatistics.defaultProps = {
  followers: '-',
  views: '-',
  likes: '-',
};

export default ProfileStatistics;
