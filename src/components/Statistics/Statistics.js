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
            
            {stats.map((statItem) => (

                <li key={statItem.id} className={styles.statisticsItem}>
                     <StatisticsItem
                     label={statItem.label}
                     percentage={statItem.percentage}
                     />
                </li>

                 ) ) }   
            </ul>     
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,

}

Statistics.defaultProps = {
    title: ""
}


export default Statistics;















