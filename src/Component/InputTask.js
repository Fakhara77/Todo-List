import React, { useRef, useState } from "react";

function InputTask(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    props.addItem(input);
    setInput("");
    inputRef.current.focus();
  }; 
  return (
    <>

    <h1>Todo-App</h1>
      <input type="text"name={input} ref={inputRef} value={input ||""} onChange={handleChange} />
      <button onClick={handleClick}>ADD</button>          
    </>
    
  );
}

export default InputTask;


