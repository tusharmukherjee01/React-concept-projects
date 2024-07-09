import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <UserContextProvider>
        <div>Chai aur React</div>
        <Login/>
        <Profile/>
      </UserContextProvider>
   
  );
}

export default App
