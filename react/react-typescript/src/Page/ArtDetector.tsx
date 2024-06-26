import React from 'react';
import Header from '../components/Header';
import IBodyCol1 from '../components/Detector/IBodyCol1';
import IBodyCol2 from '../components/Detector/IBodyCol2';
import '../components/style.css';
import IChoiceBox from '../components/Detector/IChoiceBox';
import Footer from '../components/Footer';

function ArtDetectorScreen() {
  return (
    <div className="container">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-6">
          <IBodyCol1 />
        </div>
        {/* Column 2 */}
        <div className="col-md-6">
          <IBodyCol2 />
        </div>
      </div>

      {/* Choice Box */}
      <IChoiceBox />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ArtDetectorScreen;

