/* eslint-disable no-unused-vars */
import React from 'react' ;
import UserCard from './components/UserCard/UserCard';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';







const App = () => {
    return (
        <div>
            <UserCard/>

            <Statistics
            title="Upload stats"
            stats={statisticalData}
            />
            
        </div>
    )
}

export default App;