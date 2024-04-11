import React from "react"
import '../style.css'
import { useNavigate } from "react-router-dom"

function IChoiceBox() {
    const navigate = useNavigate()
    return(
        <div className='choiceNet'>
            <div className='row'>       
            
            <div className='detectorChosen'>Image</div>
            
            <button onClick={() => navigate('/TextDetector')} className='detectorChoice'>Text</button>
        </div>
      </div>
    );
}

export default IChoiceBox