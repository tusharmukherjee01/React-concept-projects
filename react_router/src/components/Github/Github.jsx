import React, { useEffect, useState } from 'react'


function Github() {
    const [ data,setData] = useState('')
    useEffect(()=>{
        fetch(`Provide GithubAPI Link`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data);
        })
    },[]);
  return (
    <div>
      <div>
        Github Followers:{data.followers}
      </div>  
      
      </div>
  )
}

export default Github

