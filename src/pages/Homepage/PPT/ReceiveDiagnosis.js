import React from 'react';
import './Steps.css'; // Import CSS file for styling

const backgroundImageUrl = 'https://www.aoa.org/AOA/Images/Patients/Eye-exam-slit-lamp.jpg';

const ReceiveDiagnosis = () => {
  return (
    <div className="receive-diagnosis-container">
      <div className="card">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          </div>
        <div className="text-container">
          <h1 className="title">Receive Diagnosis</h1>
          <div className="text">
            <p>
              For individuals who are blind in New York, embarking on the road to independence often starts with establishing contact with the New York State Commission for the Blind (NYSCB).
            </p>
            <p>
              The first step in accessing services from NYSCB typically involves submitting diagnostic results or proof of legal blindness, which can be obtained through schools, medical professionals, private agencies for the blind, or other community, health, or social service organizations.
            </p>
            <p>
              Obtaining a diagnosis through an eye examination is essential to start receiving services from NYSCB and receiving your benefits.
            </p>
          </div>
          <div className="audio">
            <p className="audio-caption"><a href="https://www.linkedin.com/in/khadijahasan/">Listen to Kadija's story</a>:</p>
            <audio controls>
              <source src="/Kadija experience 2.MP3" type="audio/mp3" />
            </audio>
            <p className="audio-source">
              This audio is quoted from an interview.
            </p>
            </div>
            <div className="instructions">
            <h2>How to Obtain an Eye Examination:</h2>
            <p className="intro-text">
            You can obtain an eye examination from various institutions, whether they are in the private sector or state-owned. Here are some examples:
            </p>
            <div className="category">
              <strong>Eye Clinics & Hospitals:</strong>
              <ul>
                <li><a href="https://www.mountsinai.org/locations/eye">Mount Sinai Eye Center</a></li>
                <li><a href="https://www.nyee.edu/">New York Eye and Ear Infirmary of Mount Sinai (NYEE)</a></li>
                <li><a href="https://www.columbiaeye.org/">Harkness Eye Institute, Columbia University</a></li>
              </ul>
            </div>
            <div className="category">
              <strong>Governmental Agencies:</strong>
              <ul>
                <li><a href="https://ocfs.ny.gov/programs/nyscb/">New York State Commission for the Blind (NYSCB)</a></li>
                <li><a href="https://www.health.ny.gov/">New York State Department of Health</a></li>
                <li><a href="https://www.usa.gov/federal-agencies/u-s-department-of-health-and-human-services">U.S. Department of Health and Human Services</a></li>
              </ul>
            </div>
            <div className="category">
              <strong>Nonprofit Organizations:</strong>
              <ul>
                <li><a href="https://www.lighthouseguild.org/">Lighthouse Guild</a></li>
                <li><a href="https://www.visionaware.org/">VisionAware</a></li>
                <li><a href="https://www.afb.org/">American Foundation for the Blind (AFB)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ReceiveDiagnosis;