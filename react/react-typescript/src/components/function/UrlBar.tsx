import { ChangeEvent, useState } from 'react';
import '../style.css';
import React from 'react';

function TextBox() {
  const [val, setVal] = useState("");

  const click = () => {
    const pattern = /^((http|https):\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9-_.]+)*(\/)?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    if (!pattern.test(val)) {
      alert("Please enter a valid URL");
      return; // Exit the function early if URL is invalid
    } 
    alert(val)
  }

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setVal(inputValue);
  }

  return (
    <div className='row'>
      <button onClick={click} className='button'>Upload</button>
      <p className="text3">or</p>
      <input className='UrlBar' value={val} onChange={change} placeholder="Paste Url Here" />
    </div>
  );
}

export default TextBox;
