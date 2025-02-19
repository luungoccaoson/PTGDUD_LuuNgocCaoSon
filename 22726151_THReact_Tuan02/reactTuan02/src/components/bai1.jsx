import { useState } from 'react'
import './bai1.css'

function bai1() {
  const [input, setInput] = useState('');
  const [name, setName] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
  };

  function handleButtonClick(){
    setName(input);
  };
  return (
      <div className="container">
        <input type="text" onChange={handleInputChange}/>
        <br />
        <button onClick={handleButtonClick}>Click</button>
        <br />
        <span>{name}</span>
      </div>  
  )
}

export default bai1
