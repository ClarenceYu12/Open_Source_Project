import React from 'react';
import { FileDrop } from '../function/DropBox';
import TextBox from '../function/UrlBar';
import '../style.css';

function IBodyCol1() {
    return (
        <div>
            <h1 className='title2'>AI or Not?</h1>
                <FileDrop/>
            <div className='hl2'></div>

        </div>
    );
}

export default IBodyCol1;