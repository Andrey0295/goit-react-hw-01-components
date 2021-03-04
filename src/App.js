/* eslint-disable no-unused-vars */
import React from 'react' ;
import UserCard from './components/UserCard/UserCard';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Container/Container';

import statisticalData from './components/Statistics/statistical-data.json';







const App = () => {
    return (
        <>
            <Container>
              <UserCard/>
              <Statistics
              title="Upload stats"
              stats={statisticalData}
              />
            </Container>

            {/* <UserCard/>
            <Statistics
            title="Upload stats"
            stats={statisticalData}
            /> */}
            
        </>
    )
}

export default App;