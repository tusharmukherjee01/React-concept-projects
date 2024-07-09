import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    console.log(user);
 if(!user){
    return (
        <div>No User Found! Please Login...</div>
    )
 }
 else{
   return (
    <div>Welcome {user}</div>
   )
 }
}

export default Profile
