/* eslint-disable no-unused-vars */
import React from 'react' ;
import UserCard from './components/UserCard/UserCard';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Container from './components/Container/Container';

import statisticalData from './components/Statistics/statistical-data.json';
import friendsData from './components/FriendList/friendsData';







const App = () => {
    return (
        <>
            <Container>
              <UserCard/>

              <Statistics
              title="Upload stats"
              stats={statisticalData}
              />
              <FriendList
              friends={friendsData}/>

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