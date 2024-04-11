import {ChangeEvent, useState} from 'react';
import '../../style.css';

function TextBox() {
    const[val, setVal] = useState("Paste URL")
    const click = () => {
      alert(val)
    }

    const change = (event: ChangeEvent<HTMLInputElement>) => {
      setVal(event.target.value)
    }

    return (
      <div className='row'>
        <button onClick = {click} className='button'> Upload </button>
        <p className="text3">or</p>
        <input className='UrlBar' value={val} onChange={change} placeholder = "Paste Url Here"/>
      </div>
    )
  }

export default TextBox