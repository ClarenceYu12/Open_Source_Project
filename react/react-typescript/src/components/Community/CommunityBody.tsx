import React from 'react';
import '../style.css';

function CommunityBody(){
    return (
        <div>
            <div className='row'>
                <h2 className='title2'>Community</h2>
            </div>
            <div className='row'>
                <p className='communityText'> Get involve and keep up to date with the latest announcement </p>
            </div>
            <div className='communityButton'>
                <h1 className='communityTitle'> Community </h1>
                <p className='communityText2'>We welcome contributions and callaboration on our Open Source Project. For more information please read</p>
            </div>

            <div className='communityButton'>
                <h1 className='communityTitle communityTitleWithGap' > Bugs and Feature Request </h1>
                <p className='communityText2'>To report bugs or make feature requests, file an issue on github 
                Please choose the appropiate repository for the project</p>
            </div>
        </div> 
    );
}

export default CommunityBody