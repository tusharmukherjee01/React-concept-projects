import { useState ,useCallback, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");

    //useRef
    const passwordRef = useRef(null)

const copyPasswordToClipBoard = useCallback(()=>{
     passwordRef.current?.select()
     passwordRef.current?.setSelectionRange(0,3)
     window.navigator.clipboard.writeText(password)
},[password])

    const passwordGenerator=useCallback(()=>{
     
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghtyuooaanasklsaoasmsns"

      if(numberAllowed) str+="0123456789";
      if(charAllowed) str+='~!@#$%^&*{}[]()'

      for(let i=1;i<=length;i++){
        let char = Math.floor(Math.random()*str.length+1)
       pass += str.charAt(char);
       setPassword(pass);

      }
    },[length,numberAllowed,charAllowed,setPassword])
        
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 my-12 text-orange-500 bg-slate-600
      "
      >
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-full overflow-hidden mb-4 mt-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button 
          onClick={copyPasswordToClipBoard}
          className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor="">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor="">Character</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App

