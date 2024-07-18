import React, { useState } from 'react';
import './Roadmap.css';
import ReceiveDiagnosis from './PPT/ReceiveDiagnosis';
import AdjustmentProcess from './PPT/AdjustmentProcess';
import IdentifyGoals from './PPT/IdentifyGoals';
import StayConnected from './PPT/StayConnected';
import BeActive from './PPT/BeActive';
import EmpowerOthers from './PPT/EmpowerOthers';

const Roadmap = () => {
  const [currentStep, setCurrentStep] = useState(null);

  const handleStepClick = (step) => {
    setCurrentStep(step);
    document.getElementById('ppt-container').scrollIntoView({ behavior: 'smooth' });
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep !== null && prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => (prevStep !== null && prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const steps = [
    { title: 'Step 1: Click for details', name: 'Receive Diagnosis', top: '27%', left: '77%' },
    { title: 'Step 2: Click for details', name: 'Adjustment Process', top: '39%', left: '2%' },
    { title: 'Step 3: Click for details', name: 'Identify Goals', top: '51%', left: '77%' },
    { title: 'Step 4: Click for details', name: 'Stay Connected', top: '65%', left: '2%' },
    { title: 'Step 5: Click for details', name: 'Be Active', top: '77%', left: '77%' },
    { title: 'Step 6: Click for details', name: 'Empower Others', top: '90%', left: '2%' },
  ];

  return (
    <div className="roadmap-container">
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/Road to the independence.png`}
          alt="Road to Independence"
          className="roadmap-image"
        />
        {steps.map((step, index) => (
          <div
            key={index}
            className="hotspot"
            style={{ top: step.top, left: step.left }}
            onClick={() => handleStepClick(index)}
            title={`Click to see details about ${step.name}`}
          >
            {step.title}
          </div>
        ))}
      </div>
      <div id="ppt-container" className="ppt-container">
        {currentStep !== null && (
          <>
            <button className="nav-button left" onClick={handlePrevious}>❮</button>
            <button className="nav-button right" onClick={handleNext}>❯</button>
            <div className="ppt-content">
              {currentStep === 0 && <ReceiveDiagnosis />}
              {currentStep === 1 && <AdjustmentProcess />}
              {currentStep === 2 && <IdentifyGoals />}
              {currentStep === 3 && <StayConnected />}
              {currentStep === 4 && <BeActive />}
              {currentStep === 5 && <EmpowerOthers />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Roadmap;