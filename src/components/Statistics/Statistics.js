import React from 'react';
import PropTypes from 'prop-types';
// import statisticalData from './statistical-data.json';
import StatisticsItem from '../StatisticsItem/StatisticsIteam';

import styles from './Statistics.module.css';



const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statisticsBlock}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <ul className={styles.statisticsList}> 

              {
                  stats.map(({id, label, percentage}) => (
                      <StatisticsItem
                      key={id}
                      
                      label={label}
                      percentage={percentage}
                      />
                  ))
              }
            
            </ul>     
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
    }))

}

Statistics.defaultProps = {
    title: ""
}


export default Statistics;















