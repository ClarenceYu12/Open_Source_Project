import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TextDetectorScreen from './Page/TextDetector';
import ImageDetectorScreen from './Page/ArtDetector';
import Community from './Page/Community';
import Features from './Page/Features';
import HowItWorks from './Page/Works';
import Error from './Page/ErrorPage';
import React from 'react';

function App() {
  return (
    <div className='container py-5'>
      <BrowserRouter>
        <Routes>
          <Route index element={<ImageDetectorScreen />} />
          <Route path='/TextDetector' element={<TextDetectorScreen />} />
          <Route path='/ImageDetector' element={<ImageDetectorScreen />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/Community' element={<Community />} />
          <Route path='/howItWorks' element={<HowItWorks />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
