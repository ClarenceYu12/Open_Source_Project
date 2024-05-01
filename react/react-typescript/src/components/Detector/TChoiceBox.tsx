import React from "react"
import '../style.css'
import { useNavigate } from "react-router-dom"

function TChoiceBox() {
    const navigate = useNavigate()
    return(
        <div className='choice-net'>
            <div className='row'>
            <button onClick={() => navigate('/ImageDetector')} className='detector-choice'>Image</button>

            <div className='detector-chosen'>Text</div>
        </div>
      </div>
    );
}

export default TChoiceBox