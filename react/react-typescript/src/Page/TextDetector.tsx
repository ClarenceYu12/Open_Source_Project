import React from 'react';
import Header from '../components/Header';
import TBodyCol1 from '../components/Detector/TBodyCol1';
import TBodyCol2 from '../components/Detector/TBodyCol2';
import TChoiceBox from '../components/Detector/TChoiceBox';
import '../components/style.css';
import Footer from '../components/Footer';

function TextDetectorScreen() {
  return (
    <div className="container">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-6">
          <TBodyCol1 />
        </div>
        {/* Column 2 */}
        <div className="col-md-6">
          <TBodyCol2 />
        </div>
      </div>

      {/* Choice Box */}
      <TChoiceBox />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default TextDetectorScreen;
