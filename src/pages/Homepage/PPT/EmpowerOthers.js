import React from 'react';
import './Steps.css'; 

const backgroundImageUrl = 'https://hbr.org/resources/images/article_assets/2018/03/mar18-02-157189128-maodesign.jpg';

const EmpowerOthers = () => {
  return (
    <div className="receive-diagnosis-container">
      <div className="card">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          </div>
        <div className="text-container">
          <h1 className="title">Empower Others</h1>
          <div className="text">
            <p>
              Share your journey of resilience and adaptation to inspire others facing similar challenges. Consider sharing your story on platforms like Medium or Personal Blogs where you can reach a wider audience.
            </p>
            <p>
              Offer guidance and support to individuals who are newly diagnosed or navigating life with vision loss. Explore mentoring opportunities through organizations like the National Federation of the Blind Mentoring Program.
            </p>
            <p>
            Advocate for policies and practices that promote accessibility and inclusivity in your community. Join advocacy groups like the American Council of the Blind or Accessibility Advocacy Network.
            </p>
          </div>
            <div className="instructions">
            <h2>Places to share your stories and be the helpful hand:</h2>
            <div className="category">
              <ul>
                <li><a href="https://medium.com/">Share your story on Medium</a></li>
                <li><a href="https://blog.google/">Personal Blogs</a></li>
                <li><a href="https://nfb.org/programs-services/career-mentoring">NFB Career Mentoring Program</a></li>
                <li><a href="https://www.acb.org/acb-community-events">The American Council of the Blind (ACB) Community Events</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpowerOthers;