import Header from '../components/Header';
import TBodyCol1 from '../components/Detector/TBodyCol1';
import TBodyCol2 from '../components/Detector/TBodyCol2';
import TChoiceBox from '../components/Detector/TChoiceBox';
import '../components/style.css'
import Footer from '../components/Footer';


function TextDetectorScreen() {
  return (
    <div className="App">
      <Header />

    <div className='row'>
      {/* Column 1 */}
      <div>
        <div className='column column1'>
          <TBodyCol1/>
        </div>
      </div>


      {/* Column 2 */}
      <div>
        <div className='column column2'>
          <TBodyCol2/>
        </div>
      </div>
    </div>
    <TChoiceBox/>


  <div className='row'>
    <Footer/>
  </div>  
</div>
  );
}
export default TextDetectorScreen