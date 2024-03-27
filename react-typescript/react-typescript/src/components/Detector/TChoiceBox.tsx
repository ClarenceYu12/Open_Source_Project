import React from "react"
import '../style.css'
import { useNavigate } from "react-router-dom"

function TChoiceBox() {
    const navigate = useNavigate()
    return(
        <div className='choiceNet'>
            <div className='row'>
            <button onClick={() => navigate('/ImageDetector')} className='detectorChoice'>Image</button>

            <div className='detectorChosen'>Text</div>
        </div>
      </div>
    );
}

export default TChoiceBox