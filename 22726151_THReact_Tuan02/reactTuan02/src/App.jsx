import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [name, setName] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
  };

  function handleButtonClick(){
    setName(input);
  };
  return (
    <>
      <div>
        <input type="text" onChange={handleInputChange}/>
        <br />
        <button onClick={handleButtonClick}>Click</button>
        <br />
        <span>{name}</span>
      </div>  
    </>
  )
}

export default App
