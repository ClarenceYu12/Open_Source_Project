import '../components/style.css';
import Header from '../components/Header';
import CommunityBody from '../components/Community/CommunityBody';
import Footer from '../components/Footer';
import React from 'react';

function Community() {
    return (
        <div className='App'>
            <div className="row">
                <Header/>
            </div>

            <div className='row'>
                <CommunityBody/>
            </div>
            <div className='row'>
                <Footer/>
            </div>
        </div>
    );
}

export default Community