import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const[password, setPassword] = useState('')
    const handelSubmit=(e)=>{
     e.preventDefault()
     setUser(username,password)
    }
    const {setUser} = useContext(UserContext)
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="usename"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default Login
