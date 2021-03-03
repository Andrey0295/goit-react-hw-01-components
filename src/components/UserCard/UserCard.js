
import React from 'react';
import ProfileDescription from './ProfileDescription';
import StatsList from './StatsList';
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


          <StatsList
            followers={userData.stats.followers}
            views={userData.stats.views}
            likes={userData.stats.likes}
            />

         </div>
       
        
    )
        
     
}



export default UserCard;