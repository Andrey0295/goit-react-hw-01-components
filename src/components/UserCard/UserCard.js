
import React from 'react';
import ProfileDescription from '../ProfileDescription/ProfileDescription';
import ProfileStatistics from '../ProfileStatistics/ProfileStatistics';
import userData from './user.json';


const UserCard = () => {
    return (
        <div className="profile">

          <ProfileDescription
            avatar={userData.avatar}
            name={userData.name}
            tag={userData.tag}
            location={userData.location} 
          />


          <ProfileStatistics
            followers={userData.stats.followers}
            views={userData.stats.views}
            likes={userData.stats.likes}
            />

         </div>
       
        
    )
        
     
}



export default UserCard;