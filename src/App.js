import './App.css';
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
    
    <h1 className='top-heading'>Chat HS8</h1>
    <div className='mes'>
      <p>Assalam-o-Alaikum ! I am HS8 Chatbot . What is your name ?</p>
    </div>
    <div className='mes mes-1' style={{ display: isVisible ? "block" : "none" }}>
      <p>How are you {inputValue}</p>
    </div>
    <input
     placeholder='Write your Name' className='chat' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
     <button type='submit' onClick={toggleVisibility}>Submit</button>
    
    

    

    </>
  );
}

export default App;
