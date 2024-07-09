import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams();
  return (
    
    <div>
      <div className='bg-gray-800'> User:{userid}</div> 
    </div>
  )
}

export default User
