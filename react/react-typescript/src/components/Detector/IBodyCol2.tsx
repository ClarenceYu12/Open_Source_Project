import Image from './images/art.jpg'
import AiImage from './images/Ai art.jpg';
import '../style.css'
import React from 'react';

function IBodyCol2() {
    return (
        <div className='IBodyCol2'>
            <h2 className='title3'>How to use?</h2>
            <p className='text2'>Using our AI detection is very simple as all it requires is dragging over images
                from your files or pasting URL of images on the internet</p>
            <h2 className='title4'>Test for yourself</h2>
            
            {/*Sub Rows */}
            <div className='row'>

            {/* Sub col */}
            <div className='column subcol1-1'>
                <h2 className='title4'>Human</h2>
                <div>
                <img src={Image} alt="Image created by human" className="image" style={{width: '300px', height: '150px'}} />
                </div>
            </div>
            
            {/* Sub col */}
            <div className='column subcol1-2'>
                <h2 className='title4'>AI</h2>
                <div>
                <img src={AiImage} alt="Image generated with AI" className="AI image" style={{width: '300px', height: '150px'}} />
                </div>
            </div>
        </div>
    </div>
    );
}

export default IBodyCol2