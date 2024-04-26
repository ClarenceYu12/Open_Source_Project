import { useNavigate } from 'react-router-dom';
import './style.css';
import React from 'react';

function Header() {
    const navigate = useNavigate();

    return (
        <div className='container Header'>
            {/* Row */}
            <div className="row">
                <h1 className='title'>Will it AI?</h1>
                <div className="vl1"></div>
                <button onClick={() => navigate('/')} className='headerOptions'>Home</button>
                <div className="vl2"></div>
                <button onClick={() => navigate('/Features')} className='headerOptions'>Feature</button>
                <div className="vl2"></div>
                <button onClick={() => navigate('/Community')} className='headerOptions'>Contributer</button>
                <div className="vl2"></div>
            </div>

            {/* Row */}
            <div>
                <div className="hl1"></div>
            </div>
        </div>
    );
}

export default Header;
