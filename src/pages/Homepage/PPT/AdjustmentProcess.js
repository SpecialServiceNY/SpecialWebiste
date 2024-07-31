import React from 'react';
import './Steps.css'; // Import CSS file for styling

const backgroundImageUrl = 'https://media.rnib.org.uk/images/The_Happy_Hour_37_Happy_Hour_Podcast_37_Comba.width-1000.jpg';

const AdjustmentProcess = () => {
  return (
    <div className="receive-diagnosis-container">
      <div className="card">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          </div>
        <div className="text-container">
          <h1 className="title">Adjustment Process</h1>
          <div className="text">
            <p>
              We often don't realize how dependent we are on our senses until we lose one. Even losing taste, as you might experience when sick, suddenly highlights its importance. The adjustment process for vision loss can be even more significant.
            </p>
            <p>
              Losing vision or any other sense requires an adjustment period. This can be challenging and involves learning new ways to navigate the world, both physically and emotionally. Be patient with yourself and seek resources to help you adapt.
            </p>
            <p>
              Counseling can be invaluable. Talking to a professional counselor or support group can provide emotional support, help you process your feelings, and develop coping strategies.
            </p>
          </div>
          <div className="audio">
            <p className="audio-caption"><a href="https://www.linkedin.com/in/pratikp1/">Listen to Pratik's story</a>:</p>
            <audio controls>
              <source src="/Pratik-Patel.wav" type="audio/mp3" />
            </audio>
            <p className="audio-source">
              This audio is quoted from the New York State Commission for the Blind's Testimonials page: <a href="https://ocfs.ny.gov/programs/nyscb/employers/testimonials.php">https://ocfs.ny.gov/programs/nyscb/employers/testimonials.php</a>
            </p>
          </div>
            <div className="instructions">
            <h2>What can counselling do:</h2>
            <p className="intro-text">
              Counseling can be invaluable. Here are some key areas where counselors can provide support:
            </p>
            <div className="category">
              <strong>Individual Support:</strong>
              <p className="instruction-text">
                Counselors help individuals process their feelings, develop coping strategies, and adapt to their new reality. This one-on-one support is crucial for emotional well-being and personal growth.
            </p>
              <ul>
                <li><a href="https://visionsvcb.org/social-work-services/">Visions Individual Social Work Services</a></li>
                <li><a href="https://lighthouseguild.org/healthcare-services/behavioral-health-services/">Lighthouse Guild Behavioral Health Services</a></li>
                <li><a href="https://www.helenkeller.org/hknc/mental-health-services/">Helen Keller Services for the Blind Mental Health Services</a></li>
              </ul>
            </div>
            <div className="category">
              <strong>Family Counseling:</strong>
              <p className="instruction-text">
              Counselors also work with families to help them understand the challenges their loved one is facing. They provide guidance on how to support their family member and adjust to changes together, fostering a supportive home environment.
            </p>
              <ul>
                <li><a href="https://visionsvcb.org/what-we-do/community-center-for-adults/">Visions Support Groups/Counseling Services</a></li>
                <li><a href="https://aphconnectcenter.org/familyconnect/">APH FamilyConnect ®</a></li>
                <li><a href="https://www.ahrcnyc.org/services/community/clinical/counseling/">AHRC New York City Family Counseling</a></li>
              </ul>
            </div>
            <div className="category">
              <strong>Preparation and Education:</strong>
              <p className="instruction-text">
              Counselors educate both individuals and families about what to expect and how to manage daily life with vision loss. They offer practical advice and resources to help navigate this new chapter effectively.
            </p>
              <ul>
                <li><a href="https://www.helenkeller.org/hknc/virtual-services/blind-deaf-hard-of-hearing-training/#Individualized-counseling">Helen Keller National Center Individualized Counseling and Support Groups</a></li>
                <li><a href="https://www.vlanj.org/programs/low-vision-occupational-therapy-services/">Low Vision Occupational Therapy Services</a></li>
                <li><a href="https://www.afb.org/about-afb/what-we-do/afb-consulting/services-and-solutions-0/disability-inclusion-consulting?gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXDn9FFsv0MLQ-YUehqikCiYXe7KO3yvkh_XTXkoiEbg3-jZZAq7pLRoCIUQQAvD_BwE">American Foundation for the Blind (AFB) counselling</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AdjustmentProcess;