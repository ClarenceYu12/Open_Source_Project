import '../components/style.css';
import Header from '../components/Header';
import FeatureBody from '../components/FeatureBody';
import Footer from '../components/Footer';

function Features() {
    return(
        <div className='App'>
            <div className='row'>
                <Header/>
            </div>

            <div className='row'>
                <FeatureBody/>
            </div>

            <div className='row'>
                <Footer/>
            </div>
        </div>
    );
}

export default Features;