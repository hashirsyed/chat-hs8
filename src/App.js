import './App.css';
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValueF, setInputValueF] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setInputValueF(inputValue)
    setIsVisible(!isVisible);

  };
  return (
    <>
    
    <h1 className='top-heading'>Chat HS8</h1>
    <div className='mes'>
      <p>Assalam-o-Alaikum ! I am HS8 Chatbot . What is your name ?</p>
    </div>
    <div className='mes mes-1' style={{ display: isVisible ? "block" : "none" }}>
      <p>How are you {inputValueF} ?</p>
    </div>
    <div className='chat-1'>
    <input
     placeholder='Write your Name' className='chat' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
     <button type='submit' onClick={toggleVisibility}>Submit</button>
     </div>
    

    

    </>
  );
}

export default App;
