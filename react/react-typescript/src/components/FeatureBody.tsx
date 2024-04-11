import exp from 'constants';
import './style.css'
import React from 'react';

function FeatureBody(){
    return (
        <div className='App'>
            <div className='row'>
                <div className='featureBox'>
                    <h1 className='featureTitle'>TensorFlow Object Detection</h1>
                    <p className='featureText'>Integrate TensorFlow's object detection API to power the app's detection capabilities. TensorFlow provides a robust framework for training, deploying, and running object detection models, offering high accuracy and performance.</p>
                </div>
                
                <div className='featureBox'>
                    <h1 className='featureTitle'>Customizable Model Training</h1>
                    <p className='featureText'>Allow users to train custom object detection models using TensorFlow's transfer learning or fine-tuning techniques. This feature empowers users to train models on their specific datasets, enabling detection of custom objects or classes relevant to their use case.</p>
                </div>

                <div className='featureBox'>
                    <h1 className='featureTitle'>Real-time Inference</h1>
                    <p className='featureText'>Leverage TensorFlow Lite for real-time inference on mobile devices, ensuring fast and efficient object detection directly on users' smartphones or tablets. This feature provides instant feedback to users without the need for constant internet connectivity or reliance on cloud services.</p>
                </div>

                <div className='featureBox'>
                    <h1 className='featureTitle'>Model Optimization</h1>
                    <p className='featureText'>Implement model optimization techniques such as quantization, pruning, and model compression to reduce the app's memory footprint and improve inference speed. This feature ensures smooth performance even on devices with limited computational resources, making the app accessible to a wider range of users.</p>
                </div>
            </div>
        </div>
    );
}

export default FeatureBody