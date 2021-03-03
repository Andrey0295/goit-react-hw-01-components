import React from 'react';
// import PropTypes from 'prop-types';
import statisticalData from './statistical-data.json';
import StatisticsItem from './StatisticsIteam';



const Statistics = ({title, stats}) => {
    return (
        <section className="statistic">
             {title && <h2 className="title">{title}</h2>}
             <ul className="stat-list"> 


                {
                    stats.map((statItem) => (
                         <StatisticsItem
                         label={statItem.label}
                         percentage={statItem.percentage}
                         />
                    ) )
                }   
            </ul>     
        </section>
    )
}


export default Statistics;