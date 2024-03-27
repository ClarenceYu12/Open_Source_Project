import '../components/style.css';
import Header from '../components/Header';

import Footer from '../components/Footer';

function HowItWorks() {
    return(
        <div className='App'>
            <div className='row'>
                <Header/>
            </div>

            <div className='row'>
                <Footer/>
            </div>
        </div>
    );
}

export default HowItWorks;