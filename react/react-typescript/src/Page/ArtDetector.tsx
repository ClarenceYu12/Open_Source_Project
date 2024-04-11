import React from 'react';
import Header from '../components/Header';
import IBodyCol1 from '../components/Detector/IBodyCol1';
import IBodyCol2 from '../components/Detector/IBodyCol2';
import '../components/style.css';
import IChoiceBox from '../components/Detector/IChoiceBox';
import Footer from '../components/Footer';

function ArtDetectorScreen() {
  return (
    
    <div className="App">
    {/*Row 1*/}
      <div className="row">
        <Header/>
      </div>

    <div className='row'>
      {/*Column 1*/}
      <div className='column column2'>
        <IBodyCol1/>
      </div>
      {/*Column 2*/}
      <div className='column column2'>
        <IBodyCol2/>
      </div>
    </div>
  <IChoiceBox/>

  <div className='row'>
    <Footer/>
  </div>  

</div>
  );
}
export default ArtDetectorScreen

