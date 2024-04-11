import {ChangeEvent, useState} from 'react';
import '../../style.css'

function TextBox() {
    const[val, setVal] = useState("")
    const [isFocused, setIsFocused] = useState(false);
    
    const click = () => {
      alert(val)
    }

    const change = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setVal(event.target.value)
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
      <div className='textBoxWrapper'>
        <textarea className='textBox' value={val} onChange={change} onFocus={handleFocus} onBlur={handleBlur} placeholder={(!isFocused && val === '') ? 'Enter text here...' : ''}></textarea>
        <div className='row'>
          <button onClick={click} className='button'> Check </button>
        </div>
      </div>
    );
}

export default TextBox