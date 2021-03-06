import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={styles.statisticsItem}>
      <span className="label">{label}- </span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
