import exp from 'constants';
import './style.css'

function FeatureBody(){
    return (
        <div className='App'>
            <div className='row'>
                <div className='featureBox'>
                    <h1 className='featureTitle'>Feature 1</h1>
                    <p className='featureText'>Decription example Hello world</p>
                </div>
                
                <div className='featureBox'>
                    <h1 className='featureTitle'>Feature 2</h1>
                </div>

                <div className='featureBox'>
                    <h1 className='featureTitle'>Feature 3</h1>
                </div>

                <div className='featureBox'>
                    <h1 className='featureTitle'>Feature 4</h1>
                </div>
            </div>
        </div>
    );
}

export default FeatureBody