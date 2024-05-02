import React from 'react';
import '../style.css';

function CommunityBody(){
    return (
        <div>
            <div className='row'>
                <h2 className='title2'>Community</h2>
            </div>
            <div className='row'>
                <p className='community-text'> Get involve and keep up to date with the latest announcement </p>
            </div>
            <div className='community-button'>
                <h1 className='community-title'> Community </h1>
                <p className='community-text2'>We welcome contributions and callaboration on our Open Source Project. For more information please read</p>
            </div>

            <div className='community-button'>
                <h1 className='community-title' > Bugs and Feature Request </h1>
                <p className='community-text2'>To report bugs or make feature requests, file an issue on github 
                Please choose the appropiate repository for the project</p>
            </div>
        </div> 
    );
}

export default CommunityBody