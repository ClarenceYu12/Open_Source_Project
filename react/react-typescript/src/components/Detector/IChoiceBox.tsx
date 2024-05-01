import React from "react"
import '../style.css'
import { useNavigate } from "react-router-dom"

function IChoiceBox() {
    const navigate = useNavigate()
    return(
        <div className='choice-net'>
            <div className='row'>     
            
            <div className='detector-chosen'>Image</div>
            
            <button onClick={() => navigate('/TextDetector')} className='detector-choice'>Text</button>
        </div>
      </div>
    );
}

export default IChoiceBox