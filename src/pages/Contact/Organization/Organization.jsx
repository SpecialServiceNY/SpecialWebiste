import React from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import { Link } from 'react-router-dom';
import './Organization.css';

const Organization = () => {
  const { isHighContrast } = useHighContrast();
  const organizations = [
    {
      name: 'Lighthouse Guild',
      logo: 'https://www.lighthouseguild.org/wp-content/uploads/2021/06/LG_logo.jpg',
      description: 'Provides vision health and rehabilitation services, including vision correction, education, and vocational training.',
      url: 'https://lighthouseguild.org/',
    },
    {
      name: 'VISIONS/Services for the Blind and Visually Impaired',
      logo: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
      description: 'Offers a variety of services including residential, community, and vocational support, as well as education and skills training.',
      url: 'https://visionsvcb.org/',
    },
    {
      name: 'American Foundation for the Blind (AFB)',
      logo: 'https://www.guidestar.org/ViewEdoc.aspx?eDocId=10152935&approved=True',
      description: 'Provides information and resources to support the rights and independent living of blind and visually impaired individuals.',
      url: 'https://www.afb.org/',
    },
    {
      name: 'New York Institute for Special Education (NYISE)',
      logo: 'https://www.nyise.org/pics/NYISE_LOGO.gif',
      description: 'Focuses on providing education and rehabilitation services for students with visual and hearing impairments.',
      url: 'https://www.nyise.org/',
    },
    {
      name: 'Helen Keller Services (HKS)',
      logo: 'https://s3.amazonaws.com/mobilecause-avatar-production/shared_img/shared_imgs/692037/original/hk_social_share.png?1643998705',
      description: 'Provides rehabilitation services and support for individuals with vision and hearing impairments.',
      url: 'https://www.helenkeller.org/',
    },
    {
      name: 'Greater New York Council of the Blind',
      logo: 'https://acbwny.org/files/2014/12/ACB-WNY-logo0.png', // 假设这里用你自己的logo文件名
      description: 'Supports blind and visually impaired individuals through advocacy, education, and community outreach.',
      url: 'https://www.gnycb.org/', // 假设这里用他们的官方网址
    },
  ];

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
    <div className="contact-subpage">
      <h1>Organization</h1>
      <ul className="contact-list">
        {organizations.map((org, index) => (
          <li key={index} className="contact-item">
            <img src={org.logo} alt={`${org.name} logo`} className="contact-logo" />
            <div className="contact-info">
              <h2>{org.name}</h2>
              <p>{org.description}</p>
              <a href={org.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/Contact" className="back-button">Back to Contact Page</Link>
    </div>
    </div>
  );
};

export default Organization;